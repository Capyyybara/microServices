import { Controller, Get } from '@nestjs/common';
import { WareServiceService } from './ware-service.service.js';

@Controller()
export class WareServiceController {
  constructor(private readonly wareServiceService: WareServiceService) {}

  @Get()
  getHello(): string {
    return this.wareServiceService.getHello();
  }
}
