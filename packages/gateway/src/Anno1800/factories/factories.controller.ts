import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import ISO6391 from 'iso-639-1';
import { languages } from '../utility/languages.enum';



@Controller('factories')
@ApiTags('Factories')
export class FactoriesController {
  constructor() { }
  @Get()
  getAllFactories() { }

  @Get(':id')
  @ApiQuery({ name: "lang", type: "string", required: false, enum: languages })
  getById(@Query("lang") lang: string) {
    console.log(ISO6391.getName(lang))
  }
}
