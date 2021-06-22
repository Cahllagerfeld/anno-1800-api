import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Anno1800Module } from './anno1800/anno1800.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), Anno1800Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
