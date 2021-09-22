import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CalculationDTO } from './dto/calculation.dto';
import { OptimizationDTO } from './dto/optimization.dto';

@Controller('operations')
@ApiTags('Operations')
export class OperationsController {
  constructor(
    @Inject('ANNO1800_SERVICE') private readonly anno1800Service: ClientProxy,
  ) { }

  @Post('/calculate')
  calculateNeeds(@Body() body: CalculationDTO) {
    return this.anno1800Service.send({ message: 'calculate' }, body);
  }

  @Post('/optimize')
  optimizeFactorySet(@Body() body: OptimizationDTO) {
    return this.anno1800Service.send({ message: 'optimize' }, body);
  }
}
