import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Views/main-page/main-page.component';
import { LoginComponent } from './Views/login/login.component';
import { RegisterFormComponent } from './Components/register-form/register-form.component';
import { UsersComponent } from './Components/users/users.component';
import { InvoicegridComponent } from './Components/invoicegrid/invoicegrid.component';
import { RepositoryComponent } from './Components/repository/repository.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { NewinvoiceformComponent } from './Components/newinvoiceform/newinvoiceform.component';
import { HolidaycalendarComponent } from './Components/holidaycalendar/holidaycalendar.component';
import { MyprojectsComponent } from './Components/myprojects/myprojects.component';
import { AdressbookComponent } from './Components/adressbook/adressbook.component';
import { AdmindashboardComponent } from './Components/admindashboard/admindashboard.component';
import { AuthGuard } from './Guards/auth.guard';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'mainpage', component: MainPageComponent, canActivate:[AuthGuard], children: [
   { path: 'users', component: UsersComponent, canActivateChild:[AuthGuard] },
   { path: 'admindashboard', component: AdmindashboardComponent, canActivateChild:[AuthGuard] },
   { path: 'repository', component: RepositoryComponent, canActivateChild:[AuthGuard] },
   { path: 'customers', component: CustomersComponent, canActivateChild:[AuthGuard] },
   { path: 'Tasks', component: TasksComponent, canActivateChild:[AuthGuard] },
   { path: 'holiday', component: HolidaycalendarComponent, canActivateChild:[AuthGuard] },
   { path: 'adress', component: AdressbookComponent, canActivateChild:[AuthGuard] },
   { path: 'myprojects', component: MyprojectsComponent, canActivateChild:[AuthGuard] },
   { path: '', component: InvoicegridComponent, canActivateChild:[AuthGuard] },
   { path: 'invoicegrid', component: InvoicegridComponent, canActivateChild:[AuthGuard], children: [
     { path: 'NewInvoiceForm', component: NewinvoiceformComponent, canActivateChild:[AuthGuard]}]
   },
  ]},
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
