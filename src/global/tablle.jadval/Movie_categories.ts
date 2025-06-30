import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Default,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { Movie } from './Movies';
import { PlanCategory } from './Categories';

@Table({
  tableName: 'movie_categories',
  timestamps: false,
})
export class MovieCategory extends Model<MovieCategory> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  movieCategory_id: string;

  @ForeignKey(() => Movie)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  movie_id: string;

  @ForeignKey(() => PlanCategory)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  category_id: string;
}
