import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return of(this.auth.isLoggedIn()).pipe(
      map(loggedIn => {
        if (loggedIn) {
          console.log('User is logged in');
          return true;
        } else {
          return this.router.createUrlTree(['/login']);
        }
      })
    );
  }
}
