import { Module } from '@nestjs/common';
import { FactoriesController } from './factories.controller';
import { FactoriesService } from './factories.service';

@Module({
  controllers: [FactoriesController],
  providers: [FactoriesService],
})
export class FactoriesModule {}
