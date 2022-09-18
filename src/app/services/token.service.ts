import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    localStorage.setItem('token', token); //'token' es una variable que cremos para guardar allí el token en el local storage
  }

  //Ahora, voy a decirle cuál es la forma en que quiero obtener este token
  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }
}
