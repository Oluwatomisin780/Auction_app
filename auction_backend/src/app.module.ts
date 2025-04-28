import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './services/prisma/prisma.module';
import { MailModule } from './services/mail/mail.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuctionModule } from './modules/auction/auction.module';

@Module({
  imports: [PrismaModule, MailModule, UsersModule, AuthModule, AuctionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
