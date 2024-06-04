import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{
  constructor( private router: Router) { }


  // navigation on page 
  navigateToUsers(): void {
    this.router.navigate(['Users']);
  }

  navigateToInvoiceGrid(): void {
    this.router.navigate(['InvoiceGrid']);
  }

  navigateToRepository(): void {
    this.router.navigate(['Repository']);
  }

  navigateToCustomers(event :Event){
    event.preventDefault();
    this.router.navigate(['customers']);
  }
}


