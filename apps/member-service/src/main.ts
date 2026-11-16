import { NestFactory } from '@nestjs/core';
import { MemberServiceModule } from './member-service.module.js';

async function bootstrap() {
  const app = await NestFactory.create(MemberServiceModule);
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
