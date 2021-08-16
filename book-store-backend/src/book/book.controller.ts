import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Req, UnauthorizedException } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './interface/book.interface';

import { Request } from 'express';

@Controller('book')
export class BookController {
  constructor(
    private bookService: BookService
  ) {}

  @Get()
  async getData(@Req() request: Request): Promise<Book[]> {
    return await this.bookService.findBook();
    // try {
    //   if(!request.headers.authorization){
    //     throw new UnauthorizedException()
    //   }

    //   const token = request.headers.authorization.split(' ')[1]

    //   // const data = await this.jwtService.verifyAsync(token);
    //   // console.log(data)

    //   return await this.bookService.findBook();
    // } catch(e) {
    //   console.log('dox')
    //   throw new UnauthorizedException()
    // }
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
