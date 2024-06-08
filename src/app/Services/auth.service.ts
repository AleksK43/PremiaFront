import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userPayload: any; 

  constructor(private http: HttpClient, private router: Router) {
    this.userPayload = this.decodeToken(); 
  } 

  login (loginObj: any) {
    return this.http.post<any>(`Auth/login`, loginObj);
  }

  logOut() {
    localStorage.clear(); 
    this.router.navigate(['login']);
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken(): string | null {
      return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    console.log(!!localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }

  decodeToken() {
    const jwtHelper = new JwtHelperService(); 
    const token = this.getToken()!; 
    return jwtHelper.decodeToken(token);
  }

  getIDFromToken() {
    if (this.userPayload) {
      return this.userPayload.nameidentifier; 
    }
  }

  getNameFromToken() {
    if (this.userPayload) {
      return this.userPayload.name; 
    }
  }

  getIsNormalUserFromToken(): boolean | undefined {
    if (this.userPayload) {
      return this.userPayload['isSuperUser'] === "True";
    }
    return undefined;
  }

  getIsSuperUserFromToken(): boolean | undefined {
    if (this.userPayload) {
      return this.userPayload['isSuperUser'] === "True";
    }
    return undefined;
  }

  getIsSupervisorFromToken(): boolean | undefined {
    if (this.userPayload) {
      return this.userPayload['isSuperUser'] === "True";
    }
    return undefined;
  }
}
