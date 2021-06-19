import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('factories')
@ApiTags('Factories')
export class FactoriesController {
  @Get()
  getAllFactories() {}

  @Get(':id')
  getById() {}
}
