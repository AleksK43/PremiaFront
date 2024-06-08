import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { on } from 'events';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  isNormalUser: boolean = false;
  isSuperUser: boolean = false;
  isSupervisor: boolean = false;
  constructor( private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    const tokenPayload = this.authService.decodeToken();
    this.isNormalUser = tokenPayload?.isNormalUser === "True";
    this.isSuperUser = tokenPayload?.isSuperUser === "True";
    this.isSupervisor = tokenPayload?.isSupervisor === "True";
  }
  
  logout(){
    this.router.navigate(['login']); 
    this.authService.logOut(); 
  }
}


