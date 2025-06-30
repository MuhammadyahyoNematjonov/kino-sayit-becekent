import {
  Table,
  Column,
  Model,
  ForeignKey,
  PrimaryKey,
  Default,
  DataType,
  CreatedAt,
} from 'sequelize-typescript';
import { User } from './user.model';
import { SubscriptionPlan } from './Subscription_plans';
import { SubscriptionStatus } from '../type/user';



@Table({
  tableName: 'user_subscriptions',
  timestamps: false,
})
export class UserSubscription extends Model<UserSubscription> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  User_subscriptions_id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  user_id: string;

  @ForeignKey(() => SubscriptionPlan)
  @Column({ type: DataType.UUID, allowNull: false })
  plan_id: string;

  @Default(DataType.NOW)
  @Column({ type: DataType.DATE })
  start_date: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  end_date: Date;

  @Default(SubscriptionStatus.PENDING_PAYMENT)
  @Column({
    type: DataType.ENUM('active', 'expired', 'canceled', 'pending_payment'),
  })
  status: SubscriptionStatus;

  @Default(false)
  @Column({ type: DataType.BOOLEAN })
  auto_renew: boolean;

  @Default(DataType.NOW)
  @CreatedAt
  @Column({ type: DataType.DATE })
  created_at: Date;
}
