import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FactorySet } from './interfaces/commons.interface';
import { OperationsService } from './services/operations.service';
@Controller()
export class AppController {
  constructor(private readonly operationsService: OperationsService) {}

  @MessagePattern({ message: 'calculate' })
  calculate(@Payload() payload: { [name: string]: number }) {
    const populationNeeds = this.operationsService.calculateNeeds(payload);
    const factorySets = populationNeeds.map((el) =>
      this.operationsService.calculateFactorySet(el),
    );
    return factorySets;
  }

  @MessagePattern({ message: 'optimize' })
  optimize(@Payload() payload: { data: FactorySet[] }) {
    return payload.data.map((set: FactorySet) => {
      return this.operationsService.optimizeFactorySet(set);
    });
  }
}
