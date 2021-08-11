import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService extends BaseService<Book, Book>{

  constructor(protected http: HttpClient) { 
    super(http, '/book')
  }
}
