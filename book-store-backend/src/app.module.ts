import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [BookModule, TypeOrmModule.forRoot(), ConfigModule.forRoot(), LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
