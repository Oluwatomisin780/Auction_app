import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUser } from './dtos/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('create-user')
  async createUser(@Body() createUser: CreateUser) {
    return await this.userService.createUser(createUser);
  }
}
