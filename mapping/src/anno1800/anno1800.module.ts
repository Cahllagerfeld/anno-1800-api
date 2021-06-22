import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';

@Module({
  controllers: [],
  imports: [ProductsModule],
})
export class Anno1800Module {}
