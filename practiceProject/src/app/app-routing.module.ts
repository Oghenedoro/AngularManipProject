import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmploteesComponent } from './employees/list-emplotees/list-emplotees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';


const routes: Routes = [
  { path: 'list', component: ListEmploteesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'reactiveForms', component: ReactiveFormsComponent },

  {path : 'employees/:id', component: EmployeeDetailsComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
