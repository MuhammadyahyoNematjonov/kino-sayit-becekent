import { Module } from '@nestjs/common';
import { UserSubscriptionsService } from './user_subscriptions.service';
import { UserSubscriptionsController } from './user_subscriptions.controller';

@Module({
  providers: [UserSubscriptionsService],
  controllers: [UserSubscriptionsController]
})
export class UserSubscriptionsModule {}
