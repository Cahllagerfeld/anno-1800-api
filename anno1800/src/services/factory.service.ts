import { Injectable } from '@nestjs/common';
import { Factory } from '../interfaces/factory.interface';
import data from '../data/annoData';
import { FactorySet } from '../app.service';

@Injectable()
export class FactoryService {
  private factories: Factory[];
  constructor() {
    this.factories = data.factories as Factory[];
  }

  public getAll(): Factory[] {
    return this.factories;
  }

  public findById(guid: number): Factory {
    return this.factories.find((product: Factory) => product.guid === guid);
  }

  public mapFactories(factoryMap: { [guid: number]: FactorySet }) {
    let mappedFactories = [];
    Object.keys(factoryMap).forEach((guidString) => {
      const guid = +guidString;
      const factorySetFromMap = factoryMap[guid];
      const factory = this.findById(guid);
      const mappedFactory = {
        guid: factory.guid,
        name: factory.name,
        locaText: factory.locaText,
      };
      const mappedObject = { ...factorySetFromMap, ...mappedFactory };
      mappedFactories = [...mappedFactories, mappedObject];
    });
    return mappedFactories;
  }
}
