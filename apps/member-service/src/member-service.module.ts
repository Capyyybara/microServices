import { Module } from '@nestjs/common';
import { MemberServiceController } from './member-service.controller.js';
import { MemberServiceService } from './member-service.service.js';

@Module({
  imports: [],
  controllers: [MemberServiceController],
  providers: [MemberServiceService],
})
export class MemberServiceModule {}
