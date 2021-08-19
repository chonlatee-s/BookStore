import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { BookController } from './book.controller';
import { BookEntity } from './book.entity';
import { BookService } from './book.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookEntity]),
    AuthModule
],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
