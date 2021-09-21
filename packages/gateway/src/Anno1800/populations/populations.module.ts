import { Module } from '@nestjs/common';
import { PopulationsController } from './populations.controller';

@Module({
  controllers: [PopulationsController]
})
export class PopulationsModule {}
