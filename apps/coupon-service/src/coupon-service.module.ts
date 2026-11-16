import { Module } from '@nestjs/common';
import { CouponServiceController } from './coupon-service.controller.js';
import { CouponServiceService } from './coupon-service.service.js';

@Module({
  imports: [],
  controllers: [CouponServiceController],
  providers: [CouponServiceService],
})
export class CouponServiceModule {}
