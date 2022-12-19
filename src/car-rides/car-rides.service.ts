import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateCarRideDto } from './dto/create-car-ride.dto';
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

  update(id: number, updateCarRideDto: UpdateCarRideDto) {
    return `This action updates a #${id} carRide`;
  }

  remove(id: number) {
    return `This action removes a #${id} carRide`;
  }
}
