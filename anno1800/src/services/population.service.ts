import { Injectable } from '@nestjs/common';
import data from '../data/annoData';
import { PopulationLevel } from '../interfaces/population.interface';

@Injectable()
export class PopulationService {
  private populations: PopulationLevel[];
  constructor() {
    this.populations = data.populationLevels as PopulationLevel[];
    console.log(this.populations.forEach((level) => console.log(level.name)));
  }

  public getAll(): PopulationLevel[] {
    return this.populations;
  }

  public findById(guid: number): PopulationLevel {
    return this.populations.find(
      (populationLevel: PopulationLevel) => populationLevel.guid === guid,
    );
  }

  public findByName(name: string): PopulationLevel {
    return this.populations.find(
      (populationLevel: PopulationLevel) => populationLevel.name === name,
    );
  }
}
