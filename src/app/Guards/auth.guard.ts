import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private auth: AuthService, private router: Router){

  }
  canActivate():boolean{
    if(this.auth.isLoggedIn())
    {
      return true
      
    }else {
      this.router.navigate(['login'])
      return false;
    }
  }
   
}