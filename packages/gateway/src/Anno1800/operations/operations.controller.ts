import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';

@Controller('operations')
@ApiTags('Operations')
export class OperationsController {
  constructor(
    @Inject('ANNO1800_SERVICE') private readonly anno1800Service: ClientProxy,
  ) {}
  @Post('/calculate')
  calculateNeeds(@Body() body) {
    return this.anno1800Service.send({ message: 'calculate' }, body);
  }

  @Post('/optimize')
  optimizeFactorySet(@Body() body) {
    return this.anno1800Service.send({ message: 'optimize' }, body);
  }
}
