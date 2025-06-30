import { Global, Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerModule as NestMailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

@Global()
@Module({
  imports: [
    NestMailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: 'nematjonovmuhammadyahyo1@gmail.com',
          pass: 'rphs snnx xvkj gznt',
        },
      },
      defaults: {
        from: 'DarkNet<SSS>',
      },
      template: {  
        dir: join(process.cwd(), 'src'), 
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,  
        },
      },
    }),    
  ],
  providers: [MailerService],
  exports: [MailerService],
})
export class MailerModule {}
