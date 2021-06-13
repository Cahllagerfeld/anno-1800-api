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
    // return this.appService.calculateFactories(payload);
    const a = this.appService.calculateNeeds(payload);
    const b = a.map((el) => this.appService.calculateFactorySet(el));
    return b;
  }

  @MessagePattern({ message: 'metadata' })
  getMetadata() {
    return this.populationService.getKeys();
  }
}
