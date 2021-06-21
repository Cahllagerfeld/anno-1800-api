import { Injectable } from '@nestjs/common';
import { Factory } from '../interfaces/factory.interface';
import data from '../data/annoData';

@Injectable()
export class FactoriesService {
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
}
