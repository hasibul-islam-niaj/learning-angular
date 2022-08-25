import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {employeeReducer} from "./state/employee.reducer";
import {EmployeeComponent} from "./employee/employee.component";
import {EmployeeCreateComponent} from "./employeecreate/employee-create.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
      EmployeeComponent,
      EmployeeCreateComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature("employees", employeeReducer)
  ]
})

export class EmployeeModule { }
