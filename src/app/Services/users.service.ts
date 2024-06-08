import { Injectable } from '@angular/core';
import { Users } from '../Models/Users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {  }
  private baseUrl = 'https://localhost:7185/api/Users';

  public getUsers(): Observable<Users[]>
  {
    console.log('Get Users');
    return this.http.get<Users[]>(this.baseUrl);
  }
  
  public getUserById(userId: number): Observable<Users> {
    return this.http.get<Users>(`${this.baseUrl}/${userId}`);
  }
}