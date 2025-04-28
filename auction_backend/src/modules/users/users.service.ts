import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../services/prisma/prisma.service';
import { CreateUser } from './dtos/createUser.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async findOne(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async createUser(createUser: CreateUser) {
    const userExists = await this.prismaService.user.findUnique({
      where: {
        email: createUser.email,
      },
    });
    if (userExists) {
      throw new BadRequestException('User already exists');
    }
    createUser.password = await bcrypt.hash(createUser.password, 12);
    return await this.prismaService.user.create({
      data: {
        ...createUser,
      },
    });
  }
}
