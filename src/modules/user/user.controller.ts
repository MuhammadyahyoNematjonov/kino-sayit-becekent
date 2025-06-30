import { Controller, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('all')
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() body: any) { 
    return this.usersService.update(id, body);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) { 
    return this.usersService.delete(id);
  }
}
  