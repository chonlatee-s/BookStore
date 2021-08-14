import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from './book.entity';
import { Book } from './interface/book.interface';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private bookRepository: Repository<BookEntity>
  ) {}

  async findBook(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async createBook(book: Book): Promise<Book> {
    return await this.bookRepository.save(book);
  }

  async findOne(id: string): Promise<Book> {
    return await this.bookRepository.findOne({ uuid: id });
  }

  async updateBook(book: Book) {
    return await this.bookRepository.update({bookId:book.bookId}, book);
  }

  async remove(id: string) {
    return await this.bookRepository.delete({ uuid: id });
  }
}
