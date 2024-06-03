import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  constructor(private router: Router) { }

  navigateToLogin() {
    this.router.navigate(['login']);
  }
}
