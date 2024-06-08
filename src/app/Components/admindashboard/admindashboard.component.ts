import { Component, OnInit } from '@angular/core';
import { RegistrationRequest } from '../../Models/registration-request.model';
import { RegistrationRequestService } from '../../Services/registration-request.service';
import { HttpErrorResponse } from '@angular/common/http'; // Importujemy klasę HttpErrorResponse
import { Users } from '../../Models/Users';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  requests: RegistrationRequest[] = [];
  errorMessage: string = ''; // Nowa zmienna do przechowywania komunikatu o błędzie
  Users: Users[] = [];

  constructor(private registrationRequestService: RegistrationRequestService, private userService: UsersService) { }

  ngOnInit(): void {
    this.fetchNewRequests();
  }

  fetchNewRequests(): void {
    this.registrationRequestService.getUnapprovedRequests()
      .subscribe(
        (requests: RegistrationRequest[]) => {
          this.requests = requests;
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching new requests:', error);
          if (error.error && error.error.message) {
            this.errorMessage = error.error.message; 
          } else {
            this.errorMessage = 'An error occurred while fetching new requests.'; 
          }
        }
      );
  }

  fetchUsers(): void {
    this.userService.getUsers()
      .subscribe(
        (Users: Users[]) => {
          this.Users = Users;
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching users:', error);
          if (error.error && error.error.message) {
            this.errorMessage = error.error.message;
          } else {
            this.errorMessage = 'An error occurred while fetching users.';
          }
        }
      );
  }

  approveRequest(requestId: number): void {
    this.registrationRequestService.approveRequest(requestId)
      .subscribe(
        () => {
          console.log('Request approved successfully');
          this.fetchNewRequests();
        },
        (error) => {
          console.error('Error approving request:', error);
        }
      );
  }
}
