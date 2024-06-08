import { Injectable } from '@angular/core';
import { Users } from '../Models/Users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {  }

  public getUsers(): Observable<Users[]>
  {
    console.log('Get Users');
    return this.http.get<Users[]>('/Users');
  }
  
  public getUserById(userId: number): Observable<Users> {
    return this.http.get<Users>('/Users' + `/${userId}`);
  }
}