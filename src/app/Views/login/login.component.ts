import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onLogin(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res: any) => {
          this.loginForm.reset();
          this.authService.storeToken(res.token);
          const tokenPayload = this.authService.decodeToken();

          // Assuming your token has a 'role' claim
          const role = tokenPayload.role;
          this.router.navigate(['mainpage']);
        },
        error: (err: any) => {
          console.error('Login error', err);
          // Handle login error (e.g., show a message to the user)
        }
      });
    } else {
      // Handle invalid form case
      this.validateAllFormFields(this.loginForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
        control?.markAsDirty({ onlySelf: true });
      }
    });
  }

  navigateToCreateAccount(): void {
    this.router.navigate(['register']);
  }
}
