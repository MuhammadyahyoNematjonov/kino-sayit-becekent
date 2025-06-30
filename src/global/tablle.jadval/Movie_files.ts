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
import { VideoQuality } from '../type/user';



@Table({
  tableName: 'movie_files',
  timestamps: false,
})
export class MovieFile extends Model<MovieFile> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  movieFile_id: string;

  @ForeignKey(() => Movie)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  movie_id: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  file_url: string;

  @Column({
    type: DataType.ENUM(...Object.values(VideoQuality)),
    allowNull: false,
  })
  quality: VideoQuality;

  @Default('uz')
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  language: string;
}
