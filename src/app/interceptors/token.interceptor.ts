import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from '../services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  //Nosotros le decimos que le enviamos el request original antes de que se responda… entramos a la función addToken()
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addToken(request);
    return next.handle(request);
  }

  //... si no hay token, simplemente enviamos el token original (return request)... así que no hay ninguna mutación para la petición... pero si sí hay un token, entonces lo que vamos a hacer es clonar el request y luego modificar los headers... una vez hecho esto, hay que importar manualmente el interceptor en el app.module.ts
  private addToken(request: HttpRequest<unknown>) {
    const token = this.tokenService.getToken();
    if (token) {
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });
      return authReq;
    }
    return request;
  }
}
