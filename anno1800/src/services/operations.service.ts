import { Injectable } from '@nestjs/common';
import { FactorySet, TotalNeed } from '../interfaces/commons.interface';
import { Need, PopulationLevel } from '../interfaces/population.interface';
import { FactoryService } from './factory.service';
import { PopulationService } from './population.service';
import { ProductsService } from './products.service';

@Injectable()
export class OperationsService {
  constructor(
    private readonly populationService: PopulationService,
    private readonly productService: ProductsService,
    private readonly factoryService: FactoryService,
  ) {}

  public calculateNeeds(populationAmounts: {
    [name: string]: number;
  }): TotalNeed[] {
    let totalNeeds: TotalNeed[] = [];
    Object.keys(populationAmounts).forEach((name: string) => {
      const populationLevel: PopulationLevel =
        this.populationService.findByName(name);
      populationLevel.needs.forEach((need: Need) => {
        if (need.tpmin) {
          const existingNeed = totalNeeds.find(
            (need) => need.guid === populationLevel.guid,
          );
          let recalculatedNeed: TotalNeed;
          if (existingNeed) {
            recalculatedNeed = {
              guid: need.guid,
              tpmin: (existingNeed.tpmin +=
                need.tpmin * populationAmounts[name]),
            };
          } else {
            recalculatedNeed = {
              guid: need.guid,
              tpmin: need.tpmin * populationAmounts[name],
            };
          }
          totalNeeds = [...totalNeeds, recalculatedNeed];
        }
      });
    });
    return totalNeeds;
  }

  private getAmountByBoost(
    productivity: number,
    factoryTpmin: number,
    totalTpmin: number,
  ): number {
    return Math.ceil(totalTpmin / productivity / factoryTpmin);
  }

  private getProductivityByAmount(
    amount: number,
    factoryTpmin: number,
    totalTpMin: number,
  ): number {
    return totalTpMin / factoryTpmin / amount;
  }

  public calculateFactorySet(needSet: TotalNeed, preFactorySet?: FactorySet) {
    let nextFactorySet = { ...preFactorySet };
    const product = this.productService.findById(needSet.guid);
    if (product.producers) {
      product.producers.forEach((producerID: number) => {
        const factory = this.factoryService.findById(producerID);
        const productivity = nextFactorySet.productivity
          ? nextFactorySet.productivity
          : 1;
        const factoryAmount = this.getAmountByBoost(
          productivity,
          factory.tpmin,
          needSet.tpmin,
        );
        const newFactorySet: FactorySet = {
          guid: factory.guid,
          amount: factoryAmount,
          productivity: productivity,
          totalTpMin: needSet.tpmin,
        };
        nextFactorySet = { ...newFactorySet };
      });
    }
    return nextFactorySet;
  }

  public optimizeFactorySet(preFactorySet: FactorySet): FactorySet {
    const factory = this.factoryService.findById(preFactorySet.guid);
    const optimizedProductivity = this.getProductivityByAmount(
      preFactorySet.amount,
      factory.tpmin,
      preFactorySet.totalTpMin,
    );
    return {
      guid: preFactorySet.guid,
      amount: preFactorySet.amount,
      productivity: optimizedProductivity,
      totalTpMin: preFactorySet.totalTpMin,
    };
  }
}
