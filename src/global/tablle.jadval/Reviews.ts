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
  tableName: 'reviews',
  timestamps: false,
})
export class Review extends Model<Review> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  review_id: string;

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

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  })
  rating: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  comment: string;

  @Default(DataType.NOW)
  @CreatedAt
  @Column({ type: DataType.DATE })
  created_at: Date;

}
