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
    let bookToAdd = createBookFixture("addbook-1");
    libraryService.addBook(createBookFixture(bookToAdd));
    expect(libraryService.books.length == 1);
    expect(libraryService.hasBook(bookToAdd) == true);
  });

  it('can remove a book to the library', () => {
    expect(libraryService.books.length == 0);
    let bookToRemove = createBookFixture("rembook-1");
    libraryService.addBook(bookToRemove);
    expect(libraryService.books.length == 1);
    expect(libraryService.hasBook(bookToRemove) == true);
    libraryService.removeBook(bookToRemove);
    expect(libraryService.hasBook(bookToRemove) == false);
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
