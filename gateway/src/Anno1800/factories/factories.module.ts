import { Module } from '@nestjs/common';
import { FactoriesController } from './factories.controller';

@Module({
  controllers: [FactoriesController]
})
export class FactoriesModule {}
