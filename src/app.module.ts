import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AxiomService } from './axiom.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AxiomService],
})
export class AppModule {}
