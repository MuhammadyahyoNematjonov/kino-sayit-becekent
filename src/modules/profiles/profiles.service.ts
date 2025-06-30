import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Profile } from 'src/global/tablle.jadval/Profiles.jdaval';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile)
    private readonly userModel: typeof Profile,
  ) {}

  // 🆕 Create (POST)
  async create(data: Partial<Profile>) {
    if (!data.user_id || !data.full_name || !data.phone) {
      return { message: 'Required fields: user_id, full_name, phone' };
    }

    try {
      const profile = await this.userModel.create(data);
      return profile;
    } catch (error) {
      return { message: 'Error creating profile', error: error.message };
    }
  }

  // 📖 Read (GET all)
  async findAll() {
    const profiles = await this.userModel.findAll();
    if (!profiles || profiles.length === 0) {
      return { message: 'No profiles found' };
    }
    return profiles;
  }

  // 📝 Update (PUT)
  async update(id: string, data: Partial<Profile>) {
    if (!id) {
      return { message: 'ID is required' };
    }

    const user = await this.userModel.findOne({ where: { user_id: id } });

    if (!user) {
      return { message: 'User not found' };
    }

    if (!data.full_name && !data.country && !data.phone) {
      return { message: 'No fields provided to update' };
    }

    try {
      const updated = await user.update(data);
      return updated;
    } catch (error) {
      return { message: 'Error updating profile', error: error.message };
    }
  }

  // ❌ Delete
  async delete(id: string) {
    if (!id) {
      return { message: 'ID is required' };
    }

    const user = await this.userModel.findOne({ where: { user_id: id } });

    if (!user) {
      return { message: 'User not found' };
    }

    try {
      await user.destroy();
      return { message: 'User deleted', user };
    } catch (error) {
      return { message: 'Error deleting profile', error: error.message };
    }
  }
}
