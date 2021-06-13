import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactoryService } from './services/factory.service';
import { PopulationService } from './services/population.service';
import { ProductsService } from './services/products.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PopulationService, ProductsService, FactoryService],
})
export class AppModule {}
