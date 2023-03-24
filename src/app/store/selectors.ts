import { createFeatureSelector, createSelector  } from '@ngrx/store';
import { AppState } from './state';

export const selectState = createFeatureSelector<AppState>('app');

export const selectI18n = createSelector(selectState, (state) => state.i18n);

export const selectProduct = createSelector(selectState, (state) => state.product);

export const selectCart = createSelector(selectState, (state) => state.cart);
