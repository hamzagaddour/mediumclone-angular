import { ActionsTypes } from './actionsTypes';
import { createAction, props } from "@ngrx/store";
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';

export const registerAction = createAction(
  ActionsTypes.REGISTER,
  props<{request : RegisterRequestInterface}>()
)
