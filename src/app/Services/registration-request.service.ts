import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationRequest } from '../Models/registration-request.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationRequestService {
  private baseUrl = 'https://localhost:7185/api/RegistrationRequests';

  constructor(private http: HttpClient) { }

  getUnapprovedRequests(): Observable<RegistrationRequest[]> {
    return this.http.get<RegistrationRequest[]>(this.baseUrl);
  }

  approveRequest(id: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, null);
  }
  
  createRegistrationRequest(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
}
