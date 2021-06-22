import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactoriesModule } from './factories/factories.module';
import { OperationsModule } from './operations/operations.module';
import { ProductsModule } from './products/products.module';
import { PopulationsModule } from './populations/populations.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    OperationsModule,
    FactoriesModule,
    ProductsModule,
    PopulationsModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
