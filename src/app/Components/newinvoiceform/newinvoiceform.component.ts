import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newinvoiceform',
  templateUrl: './newinvoiceform.component.html',
  styleUrls: ['./newinvoiceform.component.css']
})
export class NewinvoiceformComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});
  successMessage: string = '';

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
    'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.contactForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(2)]],
      last_name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      address: ['', [Validators.required, Validators.minLength(8)]],
      city: ['', [Validators.required, Validators.minLength(4)]],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
      website: ['', Validators.required],
      hosting: ['', Validators.required],
      comment: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.successMessage = 'Success! Thanks for contacting us, we will get back to you shortly.';
      console.log(this.contactForm.value);
      // Use a service to send the data to a server here
    } else {
      this.successMessage = 'Please fill out the form correctly before submitting!';
    }
  }
}
