import {
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  BelongsTo,
  Unique,
} from 'sequelize-typescript';
import { User } from './user.model';

@Table({ tableName: 'profiles' })
export class Profile extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  profile_id: string;

  @ForeignKey(() => User)
  @Unique
  @Column({ type: DataType.UUID, allowNull: false })
  user_id: string;

  @BelongsTo(() => User)
  user: User;

  @Column({ type: DataType.STRING, allowNull: true })
  full_name: string;

  @Column({ type: DataType.STRING, allowNull: true })
  country: string;

  @Column({ type: DataType.STRING, allowNull: true })
  phone: string;
}
