import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('General')
export class AppController {
  @Get()
  info() {
    return {
      version: process.env.npm_package_version,
      time: new Date(),
    };
  }
}
