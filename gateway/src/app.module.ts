import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NeedsModule } from './needs/needs.module';
import { clients } from './clients';

@Module({
  imports: [ClientsModule.register(clients), NeedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
