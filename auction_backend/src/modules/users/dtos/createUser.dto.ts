import { IsEmail, IsString } from 'class-validator';

export class CreateUser {
  @IsString()
  fullName: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
