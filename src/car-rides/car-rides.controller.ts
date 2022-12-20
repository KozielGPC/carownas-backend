import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarRidesService } from './car-rides.service';
import { CreateCarRideDto } from './dto/create-car-ride.dto';
import { TakeCarRideDto } from './dto/take-car-ride.dto';
import { UpdateCarRideDto } from './dto/update-car-ride.dto';

@Controller('car-rides')
export class CarRidesController {
  constructor(private readonly carRidesService: CarRidesService) {}

  @Post()
  create(@Body() createCarRideDto: CreateCarRideDto) {
    return this.carRidesService.create(createCarRideDto);
  }

  @Get()
  findAll() {
    return this.carRidesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carRidesService.findOne(+id);
  }

  @Post('/take')
  takeCarRide(@Body() takeCarRideDto: TakeCarRideDto) {
    return this.carRidesService.takeCarRide(takeCarRideDto);
  }

  @Post('/cancel')
  cancelCarRide(@Body() takeCarRideDto: TakeCarRideDto) {
    return this.carRidesService.cancelCarRide(takeCarRideDto);
  }

  @Get('/myrides/:id')
  findByUser(@Param('id') id: string) {
    return this.carRidesService.findByUser(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carRidesService.remove(+id);
  }
}
