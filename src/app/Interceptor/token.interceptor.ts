import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth : AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.auth.getToken(); 
    if ( myToken)
    {
    console.log('Token is present')
      request = request.clone({
        setHeaders: {Authorization: `Baerer ${myToken}`}
      }) 
    }

    return next.handle(request).pipe(
      catchError((err:any)=>{
        if (err instanceof HttpErrorResponse)
        {
          if(err.error === 401)
          {
            this.router.navigate(['login']);
          }
        }
        return throwError(()=> err)
      }
      )
    );
  }
}