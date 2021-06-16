import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Anno1800Module } from './Anno1800/anno1800.module';
import { clients } from './clients';

@Module({
  imports: [ClientsModule.register(clients), Anno1800Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
