import { Module } from '@nestjs/common';
import { WareServiceController } from './ware-service.controller.js';
import { WareServiceService } from './ware-service.service.js';

@Module({
  imports: [],
  controllers: [WareServiceController],
  providers: [WareServiceService],
})
export class WareServiceModule {}
