import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/features/books/interfaces/book';
import { BookService } from 'src/app/features/books/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  DataSource!: Book[];

  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.bookService.find({}).toPromise().then(res => {
      this.DataSource = res;
    })
  }

  async delete(id: string | any) {
    await this.bookService.remove(id).toPromise().then(res => {
      if(res) location.reload();
    })
  }

}
