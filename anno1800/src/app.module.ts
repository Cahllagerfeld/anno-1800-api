import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactoriesModule } from './factories/factories.module';
import { OperationsModule } from './operations/operations.module';
import { ProductsModule } from './products/products.module';
import { PopulationsModule } from './populations/populations.module';

@Module({
  imports: [OperationsModule, FactoriesModule, ProductsModule, PopulationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
