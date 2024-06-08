import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetSupervisorsService {

  constructor(private http: HttpClient) { }

  getSupervisors(): Observable<string[]> {
    return this.http.get<string[]>('/Users/supervisors/names');
  }

}
