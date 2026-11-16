import { Test, TestingModule } from '@nestjs/testing';
import { CouponServiceController } from './coupon-service.controller.js';
import { CouponServiceService } from './coupon-service.service.js';

describe('CouponServiceController', () => {
  let couponServiceController: CouponServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CouponServiceController],
      providers: [CouponServiceService],
    }).compile();

    couponServiceController = app.get<CouponServiceController>(CouponServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(couponServiceController.getHello()).toBe('Hello World!');
    });
  });
});
