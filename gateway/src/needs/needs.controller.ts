import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('needs')
@ApiTags('Needs')
export class NeedsController {
  constructor(
    @Inject('NEEDS_SERVICE') private readonly needsService: ClientProxy,
  ) {}

  @Post(':lang/calculate')
  @ApiParam({
    name: 'lang',
    type: 'string',
    description: 'language in which the data should be retrieved',
  })
  calculateNeeds(@Body() body, @Param('lang') lang: string) {
    console.log(lang);
    return this.needsService.send({ message: 'calculate' }, body);
  }

  @Post(':lang/optimize')
  @ApiParam({
    name: 'lang',
    type: 'string',
    description: 'language in which the data should be retrieved',
  })
  optimizeFactorySet(@Body() body) {
    return this.needsService.send({ message: 'optimize' }, body);
  }

  @Get('/metadata/populations')
  getMetadata(@Param('lang') lang: string) {
    return this.needsService.send({ message: 'metadata' }, {});
  }
}
