import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Views/main-page/main-page.component';
import { LoginComponent } from './Views/login/login.component';
import { RegisterFormComponent } from './Components/register-form/register-form.component';
import { UsersComponent } from './Components/users/users.component';
import { InvoicegridComponent } from './Components/invoicegrid/invoicegrid.component';

export const routes: Routes = [
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterFormComponent },
 { path: 'MainPage', component: MainPageComponent, children: [
  { path: 'Users', component: UsersComponent },
  { path: '', component: InvoicegridComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
