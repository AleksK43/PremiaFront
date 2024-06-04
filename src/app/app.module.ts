import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Views/login/login.component';
import { MainPageComponent } from './Views/main-page/main-page.component';
import { RegisterFormComponent } from './Components/register-form/register-form.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './Interceptor/loading.interceptor';
import { AboutUsComponent } from './Views/about-us/about-us.component';
import { InvoicegridComponent } from './Components/invoicegrid/invoicegrid.component';
import { UsersComponent } from './Components/users/users.component';
import { RepositoryComponent } from './Components/repository/repository.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { NewinvoiceformComponent } from './Components/newinvoiceform/newinvoiceform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyprojectsComponent } from './Components/myprojects/myprojects.component';
import { AdressbookComponent } from './Components/adressbook/adressbook.component';
import { HolidaycalendarComponent } from './Components/holidaycalendar/holidaycalendar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    RegisterFormComponent,
    SpinnerComponent,
    AboutUsComponent,
    InvoicegridComponent,
    UsersComponent,
    RepositoryComponent,
    CustomersComponent,
    TasksComponent,
    NewinvoiceformComponent,
    MyprojectsComponent,
    AdressbookComponent,
    HolidaycalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
   { provide: HTTP_INTERCEPTORS, useClass: 
    LoadingInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
