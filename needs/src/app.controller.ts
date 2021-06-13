import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
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
    console.log(populationNeeds);
    const factorySets = populationNeeds.map((el) =>
      this.appService.calculateFactorySet(el),
    );
    return factorySets;
  }

  @MessagePattern({ message: 'metadata' })
  getMetadata() {
    const names = this.populationService.getKeys();
    return { populationLevels: names };
  }
}
