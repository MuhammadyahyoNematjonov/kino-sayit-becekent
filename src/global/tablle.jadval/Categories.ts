import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Default,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { MovieCategory } from './Movie_categories';

@Table({
  tableName: 'plan_categories',
  timestamps: false,
})
export class PlanCategory extends Model<PlanCategory> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  planCategory_id: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(50),
    unique: true,
    allowNull: false,
  })
  slug: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;

  @HasMany(() => MovieCategory)
movieCategories: MovieCategory[];

}
