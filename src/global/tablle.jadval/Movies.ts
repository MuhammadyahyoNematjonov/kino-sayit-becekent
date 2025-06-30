import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Default,
  ForeignKey,
  DataType,
  CreatedAt,
  HasMany,
} from 'sequelize-typescript';
import { User } from './user.model';
import { Tarif } from '../type/user';
import { MovieCategory } from './Movie_categories';
import { Review } from './Reviews';
import { WatchHistory } from './Watch_history';



@Table({
  tableName: 'movies',
  timestamps: false,
})
export class Movie extends Model<Movie> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  movie_id: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING(100),
    unique: true,
    allowNull: false,
  })
  slug: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  release_year: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  duration_minutes: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  poster_url: string;

  @Column({
    type: DataType.DECIMAL(3, 1),
    allowNull: true,
  })
  rating: number;

  @Default(Tarif.free)
  @Column({
    type: DataType.ENUM(...Object.values(Tarif)),
  })
  subscription_type: Tarif;

  @Default(0)
  @Column({ type: DataType.INTEGER })
  view_count: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  created_by: string;

  @Default(DataType.NOW)
  @CreatedAt
  @Column({ type: DataType.DATE })
  created_at: Date;

  @HasMany(() => MovieCategory)
movieCategories: MovieCategory[];

@HasMany(() => Review)
reviews: Review[];

@HasMany(() => WatchHistory)
watchHistory: WatchHistory[];


}
