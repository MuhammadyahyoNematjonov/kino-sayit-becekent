import { Module } from '@nestjs/common';
import { ProfileController } from './profiles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProfilesService } from './profiles.service';
import { Profile } from '../../global/tablle.jadval/Profiles.jdaval';
import { User } from '../../global/tablle.jadval/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Profile])],
  controllers: [ProfileController],
  providers: [ProfilesService],
  exports: [ProfilesService],
})
export class ProfileModule {}
 