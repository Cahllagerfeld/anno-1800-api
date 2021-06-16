import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService, FactorySet } from './app.service';
import { PopulationService } from './services/population.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly populationService: PopulationService,
  ) {}

  @MessagePattern({ message: 'calculate' })
  calculate(@Payload() payload: { [name: string]: number }) {
    const populationNeeds = this.appService.calculateNeeds(payload);
    const factorySets = populationNeeds.map((el) =>
      this.appService.calculateFactorySet(el),
    );
    return factorySets;
  }

  @MessagePattern({ message: 'optimize' })
  optimize(@Payload() payload: { data: FactorySet[] }) {
    return payload.data.map((set: FactorySet) => {
      return this.appService.optimizeFactorySet(set);
    });
  }

  @MessagePattern({ message: 'metadata' })
  getMetadata() {
    const names = this.populationService.getKeys();
    return { populationLevels: names };
  }
}
