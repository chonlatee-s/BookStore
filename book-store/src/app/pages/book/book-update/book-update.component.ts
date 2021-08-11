import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/features/books/interfaces/book';
import { BookService } from 'src/app/features/books/services/book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {
  private id: string = '';
  book: Book = { name:'', price:0 };

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.params.id;
    this.book = await this.bookService.findById(this.id).toPromise();
  }

  async Update() {
    await this.bookService.create(this.book).toPromise();
    this.router.navigate(['/book']);
  }

}
