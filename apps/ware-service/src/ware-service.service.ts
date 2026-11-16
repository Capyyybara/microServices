import { Injectable } from '@nestjs/common';

@Injectable()
export class WareServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
