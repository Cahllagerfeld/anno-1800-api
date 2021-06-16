import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { clients } from '../clients';
import { Anno1800Controller } from './Anno1800.controller';
import { Anno1800Service } from './Anno1800.service';

@Module({
  imports: [ClientsModule.register(clients)],
  controllers: [Anno1800Controller],
  providers: [Anno1800Service],
})
export class Anno1800Module {}
