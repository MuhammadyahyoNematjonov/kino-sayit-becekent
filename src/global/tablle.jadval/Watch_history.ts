import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Default,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { User } from './user.model';
import { Movie } from './Movies';

@Table({
  tableName: 'watch_history',
  timestamps: false,
})
export class WatchHistory extends Model<WatchHistory> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  watchHistory_id: string;

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
  })
  watched_duration: number; // sekundlarda yoki minutlarda

  @Column({
    type: DataType.DECIMAL(5, 2), // masalan: 87.50%
    allowNull: false,
  })
  watched_percentage: number;

  @Default(DataType.NOW)
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  last_watched: Date;
}
