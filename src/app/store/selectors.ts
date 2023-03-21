import { createFeatureSelector, createSelector  } from '@ngrx/store';
import { AppState, Cart } from './state';

export const selectState = createFeatureSelector<AppState>('app');

export const selectLocale = createSelector(selectState, (state: AppState) => state.locale);

export const selectCurrency = createSelector(selectState, (state: AppState) => state.currency);

export const selectProducts = createSelector(selectState, (state: AppState) => state.products);

export const selectCart = createSelector(selectState, (state: AppState) => state.cart);

// export const selectGrandTotal = createSelector(selectCart, (cart: Cart) => cart.grandTotal);

// export const selectCartItems = createSelector(selectCart, (cart: Cart) => cart.items);
