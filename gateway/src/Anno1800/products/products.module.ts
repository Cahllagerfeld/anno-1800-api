import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { Anno1800Client } from '../../clients';
import { ProductsController } from './products.controller';

@Module({
  imports: [ClientsModule.register([Anno1800Client])],
  controllers: [ProductsController],
})
export class ProductsModule {}
