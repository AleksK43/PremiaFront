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

  approveRequest(requestId: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${requestId}`, { isApproved: true });
  }
  
  createRegistrationRequest(formData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, formData);
  }
}
