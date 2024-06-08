import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationRequest } from '../Models/registration-request.model';


@Injectable({
  providedIn: 'root'
})
export class RegistrationRequestService {

  constructor(private http: HttpClient) { }

  getUnapprovedRequests(): Observable<RegistrationRequest[]> {
    return this.http.get<RegistrationRequest[]>('/RegistrationRequests'); // Fix: Changed this.baseUrl to this.BaseUrl
  }

  approveRequest(id: number): Observable<any> {
    return this.http.put<any>('/RegistrationRequests'+`/${id}`, null); // Fix: Changed this.baseUrl to this.BaseUrl
  }
  
  createRegistrationRequest(data: any): Observable<any> {
    return this.http.post('/RegistrationRequests', data); // Fix: Changed this.baseUrl to this.BaseUrl
  }
}
