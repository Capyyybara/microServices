import { Test, TestingModule } from '@nestjs/testing';
import { WareServiceController } from './ware-service.controller.js';
import { WareServiceService } from './ware-service.service.js';

describe('WareServiceController', () => {
  let wareServiceController: WareServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WareServiceController],
      providers: [WareServiceService],
    }).compile();

    wareServiceController = app.get<WareServiceController>(WareServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(wareServiceController.getHello()).toBe('Hello World!');
    });
  });
});
