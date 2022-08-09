import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from './../types/authState.interface';
import { AppStateInterface } from './../../shared/types/appState.interface';

export const authFeatureSlector =
  createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSlector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
