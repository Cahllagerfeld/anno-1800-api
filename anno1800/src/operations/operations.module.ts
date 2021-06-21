import { Module } from '@nestjs/common';
import { FactoriesService } from '../factories/factories.service';
import { PopulationsService } from '../populations/populations.service';
import { ProductsService } from '../products/products.service';
import { OperationsController } from './operations.controller';
import { OperationsService } from './operations.service';

@Module({
  controllers: [OperationsController],
  providers: [
    OperationsService,
    PopulationsService,
    ProductsService,
    FactoriesService,
  ],
})
export class OperationsModule {}
