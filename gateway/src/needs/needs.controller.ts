import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('needs')
export class NeedsController {
  constructor(
    @Inject('NEEDS_SERVICE') private readonly needsService: ClientProxy,
  ) {}

  @Post(':lang/calculate')
  calculateNeeds(@Body() body, @Param('lang') lang: string) {
    console.log(lang);
    return this.needsService.send({ message: 'calculate' }, body);
  }

  @Get('/metadata')
  getMetadata(@Param('lang') lang: string) {
    return this.needsService.send({ message: 'metadata' }, {});
  }
}