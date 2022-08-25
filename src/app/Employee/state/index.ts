import {createFeatureSelector, createSelector} from "@ngrx/store";
import {employeeReducer, EmployeeState} from "./employee.reducer";
import {state} from "@angular/animations";

export const getEmployeeFeatureState = createFeatureSelector<EmployeeState>('employees');

export const getEmployees = createSelector(
    getEmployeeFeatureState,
    state => state.employees
  )

export const getTotalCount = createSelector(
  getEmployeeFeatureState,
  state => {
    return state.totalCount;
  }
)

export const getById = (id: string) => createSelector(
  getEmployeeFeatureState,
  state => {
    return state.employees.find(emp => emp.id == id);
  }
)
