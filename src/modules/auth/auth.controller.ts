import { Body, Controller, Post } from '@nestjs/common';
// import { UserService } from './auth.service';
import { LoginUserDto, RegisterUserDto, TokenDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { Verfiyy } from './dto/veriy.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly NewUser: AuthService) {}

  @Post('register')
  register(@Body() payload: RegisterUserDto) {
    return this.NewUser.register(payload);
  }

  @Post('login')
  login(@Body() payload: LoginUserDto) {
    return this.NewUser.login(payload);
  }

  @Post('verfiy')
  verfiy(@Body() payload:Verfiyy ) {
    return this.NewUser.verification(payload);
  }

  @Post('check-token')
  checkToken(@Body() payload: TokenDto) {
    return this.NewUser.checkToken(payload);
  }
}
