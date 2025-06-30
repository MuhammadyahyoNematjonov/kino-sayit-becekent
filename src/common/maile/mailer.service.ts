import { Injectable } from '@nestjs/common';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailerService {
  constructor(private readonly maileService: NestMailerService) {}

  async sendConfigurationMailer(
    userEmail: string,
    subject: string,
    code: number,
  ) {
    await this.maileService.sendMail({
      to: userEmail,
      subject,
      template: 'index',
      context: {
        cod: code, 
      },
    });
  }
}
   