import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { clients } from '../clients';
import { Anno1800Controller } from './Anno1800.controller';
import { Anno1800Service } from './Anno1800.service';
import { PopulationsModule } from './populations/populations.module';
import { FactoriesController } from './factories/factories.controller';
import { FactoriesModule } from './factories/factories.module';
import { OperationsModule } from './operations/operations.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    PopulationsModule,
    FactoriesModule,
    OperationsModule,
    ProductsModule,
  ],
  controllers: [Anno1800Controller, FactoriesController],
  providers: [Anno1800Service],
})
export class Anno1800Module {}
