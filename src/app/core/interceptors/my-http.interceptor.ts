import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2E1ZGExNmQxOGViMTgzZmRmMDhjMmFjZTM1YWI0YiIsInN1YiI6IjY2NDM4YzFhNmNhZDI5ZDY5MDU5ZmY3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QZGS0q3IqssnFGzYZ1MCkbsSU6uJCbJhnspMNk_lX3w',
      },
    });

    return next.handle(request);
  }
}
