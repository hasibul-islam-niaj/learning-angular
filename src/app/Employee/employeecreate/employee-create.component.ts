import { Component, OnInit } from '@angular/core';
import {Employee} from "../Employee";
import {Store} from "@ngrx/store";
import {EmployeeState} from "../state/employee.reducer";
import * as employeeActions from '../state/employee.actions';
import {getById, getEmployees, getTotalCount} from "../state";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  labelEmpId: string = 'Employee ID';
  ipEmpId: string = 'employee_id';

  labelEmpName: string = 'Employee Name';
  ipEmpName: string = 'employee_name';

  labelEmpMobile: string = 'Mobile';
  ipEmpMobile: string = 'employee_mobile';

  employee: Employee = new Employee();
  employees: Employee[] = [];
  totalEmployees: number = 0;

  constructor(private store: Store<EmployeeState>) { }

  ngOnInit(): void {
    this.store.select(getEmployees)
      .subscribe(employees => {
        this.employees = employees;
      });

    this.store.select(getTotalCount)
      .subscribe(count => {
        this.totalEmployees = count;
      })
  }

  onSubmit() : void {
    this.store.dispatch(employeeActions.createEmployee({employee: this.employee}));
    this.employee = new Employee();
  }

  onEdit(id: string) : void {
    this.store.select(getById(id))
      .pipe().subscribe(employee => {
        this.employee = employee ? {...employee} : new Employee();
      })
  }
}
