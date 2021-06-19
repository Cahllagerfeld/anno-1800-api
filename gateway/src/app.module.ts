import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Anno1800Module } from './Anno1800/anno1800.module';
import { clients } from './clients';
import { RouterModule, Routes } from 'nest-router';
import { FactoriesModule } from './Anno1800/factories/factories.module';
import { OperationsModule } from './Anno1800/operations/operations.module';
import { PopulationsModule } from './Anno1800/populations/populations.module';
import { ProductsModule } from './Anno1800/products/products.module';

const routes: Routes = [
  {
    path: '/v1',
    children: [
      {
        path: '/anno1800',
        children: [
          FactoriesModule,
          OperationsModule,
          PopulationsModule,
          ProductsModule,
          FactoriesModule,
        ],
      },
    ],
  },
];
@Module({
  imports: [
    ClientsModule.register(clients),
    Anno1800Module,
    RouterModule.forRoutes(routes),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
