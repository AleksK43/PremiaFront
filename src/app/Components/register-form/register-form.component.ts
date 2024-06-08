import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationRequestService } from '../../Services/registration-request.service';
import { OnInit } from '@angular/core';
import { GetSupervisorsService } from '../../Services/get-supervisors.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit {

  supervisorList: any[] = [];
  registrationForm!: FormGroup;
  formErrors: any = {};

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private registrationRequestService: RegistrationRequestService,
    private getSupervisorsService: GetSupervisorsService
  ) { }

  ngOnInit(): void {
    this.loadSupervisors();
    this.registrationForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      supervisorId: ['', Validators.required]
    });
  }

  loadSupervisors(): void {
    this.getSupervisorsService.getSupervisors()
      .subscribe(
        (supervisors: any[]) => {
          this.supervisorList = supervisors;
        },
        (error) => {
          console.error('Error loading supervisors:', error);
        }
      );
  }
  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
  
      const registrationRequestData = {
        name: formData.first_name,
        lastName: formData.last_name,
        password: formData.password,
        email: formData.email,
        department: formData.department,
        supervisorId: formData.supervisorId
      };
  
      this.registrationRequestService.createRegistrationRequest(registrationRequestData)
        .subscribe(
          (response) => {
            console.log('Registration request submitted successfully:', response);
            this.router.navigate(['login']);
          },
          (error) => {
            console.error('Validation errors:', error.error);
            if (error.error.errors) {
              this.formErrors = error.error.errors;
            } else {
              console.error('Error submitting registration request:', error);
            }
          }
        );
    } else {
      console.error('Form is invalid');
    }
  }
}
