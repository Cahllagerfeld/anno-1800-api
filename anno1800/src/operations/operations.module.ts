import { Module } from '@nestjs/common';
import { FactoriesService } from '../factories/factories.service';
import { PopulationService } from '../services/population.service';
import { ProductsService } from '../services/products.service';
import { OperationsController } from './operations.controller';
import { OperationsService } from './operations.service';

@Module({
  controllers: [OperationsController],
  providers: [
    OperationsService,
    PopulationService,
    ProductsService,
    FactoriesService,
  ],
})
export class OperationsModule {}
