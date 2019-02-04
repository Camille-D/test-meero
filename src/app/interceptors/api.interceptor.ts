import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': `19f2e642-225c-4480-afab-5e0c2137b001`
      })
    });

    return next.handle(authReq);
  }
}
