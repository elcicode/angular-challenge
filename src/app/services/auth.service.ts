import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}`;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(email: string, password: string) : Observable<Auth> {
    return this.http.post<Auth>(`http://challenge-react.alkemy.org`, {email, password});
  }

  profile() {
    const token = localStorage.getItem('access_token');
    return this.http.get<User>(`${this.apiUrl}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

}
