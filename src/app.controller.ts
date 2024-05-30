import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { SessionService } from './session/session.service';
import { OffersService } from './offers/offers.service';
import { TermsAndConditionsService } from './terms-and-conditions/terms-and-conditions.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly session: SessionService,
    private readonly offers: OffersService,
    private readonly terms: TermsAndConditionsService,
  ) {}

  @Post('api/session')
  getSession() {
    return this.session.getSession();
  }

  @Post('financing/offers')
  getOffers(@Body() body: any) {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    return this.offers.getOffers(body);
  }

  @Post('financing/deferredOffers')
  getDeferredOffers(@Body() body: any) {
    return this.offers.getDeferredOffers(body);
  }

  @Get('financing/terms-conditions')
  getTermsAndConditions() {
    return this.terms.getTermsAndConditions();
  }

  @Post('financing/deferralOffers')
  setDeferralOfers(@Body() body: any[]) {
    return {
      deferralOffers: body.map(() => {
        // random integer 1 or 0 generate;
        const status = Math.floor(Math.random() * 2);
        // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        return { status, description: '' };
      }),
      folio: 'ad469db4-5da8-48e9-86bc-91cddc324210',
    };
  }

  @Post('api/validateTokenManager')
  validateST(@Body() body: any) {
    return {
      estatusSoftToken: 'A',
      error: {
        clave: 'OK',
        message: '',
      },
    };
  }
}
