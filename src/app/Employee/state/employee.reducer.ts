import {Employee} from "../Employee";
import {createReducer, on} from "@ngrx/store";
import * as employeeActions from "./employee.actions";

export interface EmployeeState {
  employees: Employee[]
  totalCount: number
}

export const employeeState: EmployeeState = {
  employees: [],
  totalCount: 0
}

export const employeeReducer = createReducer(
  employeeState,
  on(employeeActions.createEmployee, (state, action) => {
    return {
      ...state,
      totalCount: state.totalCount + 1,
      employees: [...state.employees, action.employee]
    };
  })
)
