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



export const routes: Routes = [
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterFormComponent },
 { path: 'mainpage', component: MainPageComponent, children: [
  { path: 'users', component: UsersComponent },
  { path: 'repository', component: RepositoryComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'Tasks', component: TasksComponent },
  { path: 'holiday', component: HolidaycalendarComponent},
  { path: 'adress', component: AdressbookComponent},
  { path: 'myprojects', component: MyprojectsComponent},
  { path: '', component: InvoicegridComponent},
  { path: 'invoicegrid', component: InvoicegridComponent, children: [
    { path: 'NewInvoiceForm', component: NewinvoiceformComponent}]
  },
   ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
