import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/user/user.module';
import { User } from './global/tablle.jadval/user.model';
import { MailerModule } from './common/maile/mailer.module';
import { RedisModule } from './common/redis/redis.module';
import { ProfilesService } from './modules/profiles/profiles.service';
import { ProfileController } from './modules/profiles/profiles.controller';
import { ProfileModule } from './modules/profiles/profiles.module';
import { Profile } from './global/tablle.jadval/Profiles.jdaval';
import { SubscriptionPlansService } from './common/Subscription_plans/subscription_plans.service';
import { SubscriptionPlansController } from './common/Subscription_plans/subscription_plans.controller';
import { SubscriptionPlansModule } from './common/Subscription_plans/subscription_plans.module';
import { UserSubscriptionsModule } from './common/User_subscriptions/user_subscriptions.module';
import { PaymentsController } from './common/Payments/payments.controller';
import { PaymentsService } from './common/Payments/payments.service';
import { PaymentsModule } from './common/Payments/payments.module';
import { CategoriesModule } from './common/Categories/categories.module';
import { MoviesService } from './common/Movies/movies.service';
import { MoviesController } from './common/Movies/movies.controller';
import { MoviesModule } from './common/Movies/movies.module';
import { MovieCategoriesModule } from './common/Movie_categories/movie_categories.module';
import { MovieFilesController } from './common/Movie_files/movie_files.controller';
import { MovieFilesModule } from './common/Movie_files/movie_files.module';
import { FavoritesService } from './common/Favorites/favorites.service';
import { FavoritesController } from './common/Favorites/favorites.controller';
import { FavoritesModule } from './common/Favorites/favorites.module';
import { ReviewsModule } from './common/Reviews/reviews.module';
import { WatchHistoryController } from './common/Watch_history/watch_history.controller';
import { WatchHistoryService } from './common/Watch_history/watch_history.service';
import { WatchHistoryModule } from './common/Watch_history/watch_history.module';
import { Review } from './global/tablle.jadval/Reviews';
import { WatchHistory } from './global/tablle.jadval/Watch_history';
import { AdminPanelService } from './common/admin_panel/admin_panel.service';
import { AdminPanelController } from './common/admin_panel/admin_panel.controller';
import { AdminPanelModule } from './common/admin_panel/admin_panel.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      
      useFactory: (config: ConfigService) => ({
        dialect: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        autoLoadModels: true,
        synchronize: true,
        models: [User, Profile,Review,WatchHistory],
        logging: config.get<boolean>('DB_LOGGING', false) ? console.log : false,
      }),
    }),
    UsersModule,
    MailerModule,
    UsersModule,
    AuthModule,
    RedisModule,
    ProfileModule,
    SubscriptionPlansModule,
    UserSubscriptionsModule,
    PaymentsModule,
    CategoriesModule,
    MoviesModule,
    MovieCategoriesModule,
    MovieFilesModule,
    FavoritesModule,
    ReviewsModule,
    WatchHistoryModule,
    AdminPanelModule,
  ],
  providers: [SubscriptionPlansService, PaymentsService, MoviesService, FavoritesService, WatchHistoryService, AdminPanelService],
  controllers: [SubscriptionPlansController, PaymentsController, MoviesController, MovieFilesController, FavoritesController, WatchHistoryController, AdminPanelController],
})
export class AppModule {}
