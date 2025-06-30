import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/global/tablle.jadval/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async findAll() {
    return this.userModel.findAll();
  }

  async update(id: string, data: Partial<User>) {
    const user = await this.userModel.findOne({ where: { id } });
    if (!user) return { message: 'User not found' };
    return user.update(data);
  }

  async delete(id: string) {
    const user = await this.userModel.findOne({ where: { id } });
    if (!user) return { message: 'User not found' };
    await user.destroy();
    return { message: 'User deleted', user };
  }
}
