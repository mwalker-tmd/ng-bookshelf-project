/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {LibraryService} from './library.service';
import {Book} from "./book";

function createBookFixture(book_id) {
  return new Book(
    book_id,
    "title",
    "subTitle:",
    ["authors"],
    "publisher",
    "publishDate",
    "description",
    ["categories"],
    "thumbnail",
    "smallThumbnail"
  )
}

describe('LibraryService', () => {
  let libraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryService]
    });
    libraryService = TestBed.get(LibraryService);
  });


  it('can add a book to the library', () => {
    expect(libraryService.books.length == 0);
    libraryService.addBook(createBookFixture("addbook-1"));
    expect(libraryService.books.length == 1);
    expect(libraryService.hasBook("addbook-1") == true);
  });

  it('can remove a book to the library', () => {
    expect(libraryService.books.length == 0);
    let bookToRemove = createBookFixture("rembook-1");
    libraryService.addBook(bookToRemove);
    expect(libraryService.books.length == 1);
    expect(libraryService.hasBook("rembook-1") == true);
    libraryService.removeBook(bookToRemove);
    expect(libraryService.hasBook("rembook-1") == false);
  });

  it('checks if a book is already in the library', () => {
    expect(libraryService.books.length == 0);
    let testBook = createBookFixture("hasbook-1");
    expect(libraryService.hasBook(testBook) == false);
    libraryService.addBook(createBookFixture(testBook));
    expect(libraryService.books.length == 1);
    expect(libraryService.hasBook(testBook) == true);
  });

  it('can save and load the books', () => {
    //TODO
  });
});
