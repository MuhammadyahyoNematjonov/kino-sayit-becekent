import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Default,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'subscription_plans',
  timestamps: false,
})
export class SubscriptionPlan extends Model<SubscriptionPlan> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  subscriptionPlan_id: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  duration_days: number;

  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  features: object;

  @Default(true)
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_active: boolean;
}
