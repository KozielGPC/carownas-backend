import { Module } from '@nestjs/common';
import { CarRidesService } from './car-rides.service';
import { CarRidesController } from './car-rides.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [CarRidesController],
  providers: [CarRidesService, PrismaService],
})
export class CarRidesModule {}
