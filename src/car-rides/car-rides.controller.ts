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
import { UpdateCarRideDto } from './dto/update-car-ride.dto';

@Controller('car-rides')
export class CarRidesController {
  constructor(private readonly carRidesService: CarRidesService) {}

  @Post()
  create(@Body() createCarRideDto: CreateCarRideDto) {
    console.log(createCarRideDto);

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarRideDto: UpdateCarRideDto) {
    return this.carRidesService.update(+id, updateCarRideDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carRidesService.remove(+id);
  }
}
