import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Default,
  ForeignKey,
  DataType,
  CreatedAt,
} from 'sequelize-typescript';
import { User } from './user.model';
import { Movie } from './Movies';

@Table({
  tableName: 'favorites',
  timestamps: false,
})
export class Favorite extends Model<Favorite> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  favorite_id: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id: string;

  @ForeignKey(() => Movie)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  movie_id: string;

  @Default(DataType.NOW)
  @CreatedAt
  @Column({ type: DataType.DATE })
  created_at: Date;
}
