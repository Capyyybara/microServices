import { Controller, Get } from '@nestjs/common';
import { CouponServiceService } from './coupon-service.service.js';

@Controller()
export class CouponServiceController {
  constructor(private readonly couponServiceService: CouponServiceService) {}

  @Get()
  getHello(): string {
    return this.couponServiceService.getHello();
  }
}
