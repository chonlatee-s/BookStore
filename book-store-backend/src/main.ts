import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser())
  app.enableCors({
    origin:'http://localhost:4200',
    credentials:true
  }) 

  const configService = app.get(ConfigService);
  app.setGlobalPrefix(configService.get('NAME'));
  await app.listen(configService.get('PORT'));
}
bootstrap();
