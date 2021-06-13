import { Injectable } from '@nestjs/common';
import { Need, PopulationLevel } from './interfaces/population.interface';
import { Product } from './interfaces/product.interface';
import { FactoryService } from './services/factory.service';
import { PopulationService } from './services/population.service';
import { ProductsService } from './services/products.service';

export interface TotalNeed {
  guid: number;
  tpmin: number;
}

export interface FactorySet {
  amount: number;
  productivity: number;
  totalTpMin: number;
}

@Injectable()
export class AppService {
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
    console.log(totalNeeds);
    return totalNeeds;
  }

  private getAmountByBoost(
    productivity: number,
    factoryTpmin: number,
    totalTpmin: number,
  ): number {
    return Math.ceil(totalTpmin / productivity / factoryTpmin);
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
          amount: factoryAmount,
          productivity: productivity,
          totalTpMin: needSet.tpmin,
        };
        nextFactorySet = { ...newFactorySet };
      });
    }
    return nextFactorySet;
  }
}
