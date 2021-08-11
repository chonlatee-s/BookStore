import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/features/books/interfaces/book';
import { BookService } from 'src/app/features/books/services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  
  name: string = '';
  price: number = 0;

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async Create() {
    const name = this.name;
    const price = this.price;

    const book: Book = {name, price}
    await this.bookService.create(book).toPromise();
    this.router.navigate(['/book']);
  }

}
