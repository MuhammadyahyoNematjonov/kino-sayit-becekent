import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/global/tablle.jadval/user.model';
import { JwtModule } from '@nestjs/jwt';
import { JwtAccesToken } from 'src/common/utils/jwt-auth';
import { RedisModule } from '../../common/redis/redis.module'; 

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.register(JwtAccesToken),
    RedisModule 
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
