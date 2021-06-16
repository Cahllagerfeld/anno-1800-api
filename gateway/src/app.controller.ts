import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  info() {
    return {
      message: "you're using the Anno 1800 Api",
      version: process.env.npm_package_version,
      time: new Date(),
    };
  }
}
