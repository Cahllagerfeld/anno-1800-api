import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { clients } from '../../clients';
import { OperationsController } from './operations.controller';

@Module({
  imports: [ClientsModule.register(clients)],
  controllers: [OperationsController],
})
export class OperationsModule {}
