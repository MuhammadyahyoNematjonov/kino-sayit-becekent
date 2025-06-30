import { IsEmail, IsString } from 'class-validator';

export class Verfiyy {
  @IsEmail()
  email: string;

  @IsString()
  code: string;
}
