import {BadRequestException, ConflictException,Injectable,NotFoundException,} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/global/tablle.jadval/user.model';
import { LoginUserDto, RegisterUserDto, TokenDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { MailerService } from 'src/common/maile/mailer.service';
import { RedisService } from 'src/common/redis/redis.service';
import { Verfiyy } from './dto/veriy.dto';
import { v4 as uuidv4 } from 'uuid';
// import { UserModule } from '../user/user.module';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private NewUserService: typeof User,
    private jwtService: JwtService,
    private mailer:MailerService,
    private redis:RedisService,
  ) {}

  async generateToken(payload: any, natija?: boolean) {
    const accessToken = await this.jwtService.signAsync({
      ...payload,
      type: 'accessToken',
    });
    const refreshToken = await this.jwtService.signAsync({
      ...payload,
      type: 'refreshToken',
    });
    if (!natija) {
      return {
        accessToken,
        refreshToken    
      };
    }
    return {
      accessToken,
      refreshToken,
    };
  }

  async register(payload: Required<RegisterUserDto>) {
    let User = await this.NewUserService.findOne({
      where: { username: payload.username },
    });
    let email = await this.NewUserService.findOne({
      where: { email: payload.email },
    });
    if (User) throw new ConflictException('username already');
    if (email) throw new ConflictException('email already');
    let code =Math.floor(Math.random() *100000 )
    await this.mailer.sendConfigurationMailer(payload.email, "salom", code)

    await this.redis.set(`register:${payload.email}`,JSON.stringify({...payload,code}),600)
   
    let hashPassword = await bcrypt.hash(payload.password, 10);


     return `emailya  ${payload.email} cod yubordi`
  }
  
  async verification(payload:Verfiyy){  
    let store = await this.redis.get(`register:${payload.email}`)
    if(!store) throw new BadRequestException("otp error")

    let UserData = JSON.parse(store)
    if(UserData.code !=payload.code) throw new BadRequestException("otp xato")

   await this.redis.del(`register:${payload.email}`)
   delete UserData.code
   let hash = await bcrypt.hash(UserData.password , 10) 
   let basaesdata = await this.NewUserService.create({...UserData,password:hash})
   return this.generateToken({ id: basaesdata.dataValues.id, role: basaesdata.dataValues.role })
  }

  async login(payload: Required<LoginUserDto>) {
    let User = await this.NewUserService.findOne({
      where: { username: payload.username },
    });
    if (!User) throw new NotFoundException('User not found');
    let compare = await bcrypt.compare(
      payload.password,
      User.dataValues.password,
    );

    if (!compare) throw new NotFoundException('Password error');

    let tokens = await this.generateToken(
      { id: User.dataValues.id, role: User.dataValues.role },
      true,
    );

    return {
      tokens,
      data: User,
    };
  }

  async checkToken(tokenDto: Required<TokenDto>) {
    let payload = await this.jwtService.verifyAsync(tokenDto.token);

    let tokens = await this.generateToken(
      { id: payload.id, role: payload.role },
      false,
    );

    return {
      ...tokens,
      ...tokens
    };
  }
}
