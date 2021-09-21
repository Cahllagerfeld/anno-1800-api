import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { Anno1800Client } from '../../clients';
import { OperationsController } from './operations.controller';

@Module({
  imports: [ClientsModule.register([Anno1800Client])],
  controllers: [OperationsController],
})
export class OperationsModule {}
