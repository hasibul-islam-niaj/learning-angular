import {createAction, props} from "@ngrx/store";
import {Employee} from "../Employee";

export const createEmployee = createAction(
  '[Employee Form] Create Employee',
  props<{employee: Employee}>()
)
