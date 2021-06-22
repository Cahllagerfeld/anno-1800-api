import { Module } from '@nestjs/common';
import { ProductsMappingService } from './products-mapping.service';
import { ProductsController } from './products.controller';

@Module({
  controllers: [ProductsController],
  providers: [ProductsMappingService],
})
export class ProductsModule {}
