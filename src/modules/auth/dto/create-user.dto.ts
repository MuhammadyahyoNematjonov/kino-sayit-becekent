import {
  IsEmail,
  IsJWT,
  IsNotEmpty,
  isPassportNumber,
  IsPassportNumber,
  IsString,
  length,
  Length,
} from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty()
  @IsString()
  username: String;

  @Length(8, 16)
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  username: String;

  @Length(8, 16)
  @IsNotEmpty()
  password: string;
}

export class TokenDto {
  @IsJWT()
  token: string;
}
