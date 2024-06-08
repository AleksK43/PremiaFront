import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetSupervisorsService {

  private baseUrl = 'https://localhost:7185/api/Users/supervisors/names';

  constructor(private http: HttpClient) { }

  getSupervisors(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl);
  }

}
