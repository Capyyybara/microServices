import { Injectable } from '@nestjs/common';

@Injectable()
export class CouponServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
