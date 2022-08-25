import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthorinfoComponent} from './authorinfo/authorinfo.component';
import { DashboardComponent } from './entities/dashboard/dashboard.component';
import {EmployeeComponent} from "./Employee/employee/employee.component";
import {EmployeeCreateComponent} from "./Employee/employeecreate/employee-create.component";

const routes: Routes = [
  {path: 'authors', component: AuthorinfoComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'create-employee', component: EmployeeCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
