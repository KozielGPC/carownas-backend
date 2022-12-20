import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateCarRideDto } from './dto/create-car-ride.dto';
import { TakeCarRideDto } from './dto/take-car-ride.dto';
import { UpdateCarRideDto } from './dto/update-car-ride.dto';

@Injectable()
export class CarRidesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCarRideDto) {
    const rider = await this.prisma.user.findUnique({
      where: {
        ra: data.rider_ra,
      },
    });

    if (!rider) {
      throw new HttpException('User not found', 404);
    }

    return this.prisma.carRide.create({
      data: data,
    });
  }

  async findAll() {
    return this.prisma.carRide.findMany({
      include: {
        rider: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.carRide.findUnique({
      where: {
        id: id,
      },
      include: {
        rider: true,
      },
    });
  }

  async takeCarRide(data: TakeCarRideDto) {
    const ride = await this.prisma.carRide.findUnique({
      where: {
        id: data.car_ride_id,
      },
    });

    if (!ride) {
      throw new HttpException('Car Ride not found', 404);
    }

    if (ride.total_spots == ride.filled_spots) {
      throw new HttpException('There is no more spots available', 400);
    }

    let passagers = ride.passagers;

    passagers = [...passagers, data.passager_ra];

    return this.prisma.carRide.update({
      data: {
        passagers: passagers,
        filled_spots: {
          increment: 1,
        },
      },
      where: {
        id: data.car_ride_id,
      },
    });
  }

  async cancelCarRide(data: TakeCarRideDto) {
    const ride = await this.prisma.carRide.findUnique({
      where: {
        id: data.car_ride_id,
      },
    });

    if (!ride) {
      throw new HttpException('Car Ride not found', 404);
    }

    let passagers = ride.passagers;

    passagers = passagers.filter((passager) => passager != data.passager_ra);

    return this.prisma.carRide.update({
      data: {
        passagers: passagers,
        filled_spots: {
          decrement: 1,
        },
      },
      where: {
        id: data.car_ride_id,
      },
    });
  }

  async findByUser(id: string) {
    return this.prisma.carRide.findMany({
      where: {
        passagers: {
          has: id,
        },
      },
      include: {
        rider: true,
      },
    });
  }
  remove(id: number) {
    return `This action removes a #${id} carRide`;
  }
}
