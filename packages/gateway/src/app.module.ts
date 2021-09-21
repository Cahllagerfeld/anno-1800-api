import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Anno1800Module } from './Anno1800/anno1800.module';
import { Anno1800Client } from './clients';
import { RouterModule, Routes } from 'nest-router';
import { FactoriesModule } from './Anno1800/factories/factories.module';
import { OperationsModule } from './Anno1800/operations/operations.module';
import { PopulationsModule } from './Anno1800/populations/populations.module';
import { ProductsModule } from './Anno1800/products/products.module';
import { LanguageMiddleware } from './Anno1800/middleware/language. middleware';
import { ConfigModule } from '@nestjs/config';

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
        ],
      },
    ],
  },
];
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.register([Anno1800Client]),
    RouterModule.forRoutes(routes),
    Anno1800Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LanguageMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
