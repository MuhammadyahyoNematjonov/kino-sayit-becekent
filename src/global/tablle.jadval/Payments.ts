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
import { UserSubscription } from './User_subscriptions';
import { PaymentMethod, PaymentStatus } from '../type/user';



@Table({
  tableName: 'payments',
  timestamps: false,
})
export class Payment extends Model<Payment> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  Payments_id: string;

  @ForeignKey(() => UserSubscription)
  @Column({ type: DataType.UUID, allowNull: false })
  user_subscription_id: string;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  amount: number;

  @Column({
    type: DataType.ENUM(...Object.values(PaymentMethod)),
    allowNull: false,
  })
  payment_method: PaymentMethod;

  @Column({ type: DataType.JSON })
  payment_details: object;

  @Default(PaymentStatus.PENDING)
  @Column({
    type: DataType.ENUM(...Object.values(PaymentStatus)),
  })
  status: PaymentStatus;

  @Column({ type: DataType.STRING(100), allowNull: true })
  external_transaction_id: string;

  @Default(DataType.NOW)
  @CreatedAt
  @Column({ type: DataType.DATE })
  created_at: Date;
}
