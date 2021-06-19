import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('populations')
@ApiTags('Populations')
export class PopulationsController {
  @Get()
  getPopulations() {}

  @Get(':id')
  getById() {}
}
