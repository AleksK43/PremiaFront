import { Component, OnInit } from '@angular/core';
import { RegistrationRequest } from '../../Models/registration-request.model';
import { RegistrationRequestService } from '../../Services/registration-request.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent implements OnInit {
  requests: RegistrationRequest[] = [];

  constructor(private registrationRequestService: RegistrationRequestService) { }

  ngOnInit(): void {
    this.fetchNewRequests();
  }

  fetchNewRequests(): void {
    this.registrationRequestService.getUnapprovedRequests()
      .subscribe(
        (requests: RegistrationRequest[]) => {
          this.requests = requests;
        },
        (error) => {
          console.error('Error fetching new requests:', error);
        }
      );
  }
}