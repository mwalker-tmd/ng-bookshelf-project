import {Routes} from "@angular/router";
import {SearchComponent} from "./search/search.component";
import {LibraryComponent} from "./library/library.component";
import {BookComponent} from "./book/book.component";
import {ErrorPageComponent} from "./errorpage/errorpage.component";

export const routes: Routes = [
  { path : "", redirectTo : "library", pathMatch : "full" },
  { path : "book/:bookId", component : BookComponent },
  { path : "library", component : LibraryComponent },
  { path : "search", component : SearchComponent },
  { path : "**", component : ErrorPageComponent}
  ];
