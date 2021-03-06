import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './interface/book.interface';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async getData(): Promise<Book[]> {
    return await this.bookService.findBook();
  }

  @Get(':id')
  async getDataById(@Param('id') id: string): Promise<Book> {
    return await this.bookService.findOne(id);
  }

  @Post()
  async createData(@Body() data: CreateBookDto): Promise<Book> {
    return await this.bookService.createBook(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    const book = await this.bookService.findOne(id);
    if(!book) throw new NotFoundException();
    // เอาไอดีที่หาได้มาใส่แทน เพื่อป้องกันการอัปเดทผิดพลาด
    updateBookDto.bookId = book.bookId;
    return await this.bookService.updateBook(updateBookDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
     const book = await this.bookService.findOne(id);

    if(!book) throw new NotFoundException();
    return await this.bookService.remove(id);
  }

}
