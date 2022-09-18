import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from 'src/app/models/menu.model';

import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private product$ = new BehaviorSubject<Menu[]>([]);
  // selectedProduct$ = this.product$.asObservable();

  // setProduct(menu: Menu[]) {
  //   this.product$.next(this.menu);
  // }

  // inputQuery: string = '';
  @Output() menu: Menu[] = [];

  private queryString = [
    '?apiKey=0309a84105584b88bd7f8220430d8701',
    '&addRecipeInformation=true',
    '&number=8'
  ].join('');

  private apiUrl = `${environment.API_URL}/${this.queryString}`;

  constructor(
    private http: HttpClient
  ) { }

  getMenu() {
    return this.http.get<Menu[]>(this.apiUrl);
  }

  getMenuById(id: string) {
    return this.http.get<Menu>(`${this.apiUrl}&${id}`);
  }

  getMenuByQuery(query: string) {
    return this.http.get<Menu[]>(`${this.apiUrl}&query=${query}`);
  }

}
