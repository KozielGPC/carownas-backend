import { PartialType } from '@nestjs/mapped-types';
import { CreateCarRideDto } from './create-car-ride.dto';

export class UpdateCarRideDto extends PartialType(CreateCarRideDto) {}
