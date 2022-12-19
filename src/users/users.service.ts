import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { LogoffDto } from './dto/logoff.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    return this.prisma.user.create({
      data: data,
    });
  }

  async login(data: LoginDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        ra: data.ra,
        password: data.password,
      },
    });

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    return this.prisma.user.update({
      data: {
        active: true,
      },
      where: {
        ra: data.ra,
      },
      include: {
        rides: true,
      },
    });
  }

  async logoff(data: LogoffDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        ra: data.ra,
      },
    });

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    return this.prisma.user.update({
      data: {
        active: false,
      },
      where: {
        ra: data.ra,
      },
      include: {
        rides: true,
      },
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
