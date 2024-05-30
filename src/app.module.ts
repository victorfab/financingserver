import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionService } from './session/session.service';
import { OffersService } from './offers/offers.service';
import { TermsAndConditionsService } from './terms-and-conditions/terms-and-conditions.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SessionService, OffersService, TermsAndConditionsService],
})
export class AppModule {}
