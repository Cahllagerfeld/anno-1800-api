import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactoriesModule } from './factories/factories.module';
import { OperationsModule } from './operations/operations.module';

@Module({
  imports: [OperationsModule, FactoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
