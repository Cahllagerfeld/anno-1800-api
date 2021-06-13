import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { clients } from '../clients';
import { NeedsController } from './needs.controller';
import { NeedsService } from './needs.service';

@Module({
  imports: [ClientsModule.register(clients)],
  controllers: [NeedsController],
  providers: [NeedsService],
})
export class NeedsModule {}
