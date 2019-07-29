import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmploteesComponent } from './employees/list-emplotees/list-emplotees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { DisplayEmployeeComponent } from './employees/display-employee/display-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeService } from './share/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    ListEmploteesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
