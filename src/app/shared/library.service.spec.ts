/* tslint:disable:no-unused-variable */

import {TestBed, async, inject, tick} from '@angular/core/testing';
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
    libraryService.books = [];
  });


  it('can add a book to the library', () => {
    expect(libraryService.books.length).toBe(0);
    let bookToAdd = createBookFixture("addbook-1");
    libraryService.addBook(bookToAdd);
    expect(libraryService.books.length).toBe(1);
    expect(libraryService.hasBook(bookToAdd)).toBe(true);
  });

  it('can remove a book to the library', () => {
    expect(libraryService.books.length).toBe(0);
    let bookToRemove = createBookFixture("rembook-1");
    libraryService.addBook(bookToRemove);
    expect(libraryService.books.length).toBe(1);
    expect(libraryService.hasBook(bookToRemove)).toBe(true);
    libraryService.removeBook(bookToRemove);
    expect(libraryService.hasBook(bookToRemove)).toBe(false);
  });

  it('checks if a book is already in the library', () => {
    expect(libraryService.books.length).toBe(0);
    let testBook = createBookFixture("hasbook-1");
    expect(libraryService.hasBook(testBook)).toBe(false);
    libraryService.addBook(testBook);
    expect(libraryService.books.length).toBe(1);
    expect(libraryService.hasBook(testBook)).toBe(true);
  });

  it('can save and load the books', () => {
    expect(libraryService.books.length).toBe(0);
    let bookToAdd1 = createBookFixture("addbook-1");
    libraryService.addBook(bookToAdd1);
    let bookToAdd2 = createBookFixture("addbook-2");
    libraryService.addBook(bookToAdd2);
    let bookToAdd3 = createBookFixture("addbook-3");
    libraryService.addBook(bookToAdd3);
    expect(libraryService.books.length).toBe(3);
    spyOn(libraryService, 'save');
    libraryService.save();
    expect(libraryService.save).toHaveBeenCalled();
    libraryService.removeBook(bookToAdd1);
    libraryService.removeBook(bookToAdd2);
    libraryService.removeBook(bookToAdd3);
    expect(libraryService.books.length).toBe(0);
    // spyOn(libraryService, 'load');
    libraryService.load();
    // console.log("... post-load ...");
    // console.log("books.length = " + libraryService.books.length);
    // expect(libraryService.load).toHaveBeenCalled();
    expect(libraryService.hasBook(bookToAdd1)).toBe(true);
    expect(libraryService.hasBook(bookToAdd2)).toBe(true);
    expect(libraryService.hasBook(bookToAdd3)).toBe(true);
    expect(libraryService.books.length).toBe(3);
  });
});
