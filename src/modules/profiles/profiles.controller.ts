import { Controller, Get, Put, Param, Body, Delete, Post } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { Profile } from 'src/global/tablle.jadval/Profiles.jdaval';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get('all')
  getAllUsers() {
    return this.profilesService.findAll();
  }

  @Post('create')
  createProfile(@Body() body: Partial<Profile>) {
    return this.profilesService.create(body);
  }

  @Put('put/:id')
  updateUser(@Param('id') id: string, @Body() body: any) {
    return this.profilesService.update(id, body);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.profilesService.delete(id);
  }
}
