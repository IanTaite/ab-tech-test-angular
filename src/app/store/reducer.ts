import { createReducer, on } from '@ngrx/store';
import { initialState } from './state';
import {
  addProductToCart,
  removeProductFromCart,
  incrementProductQuantity,
  decrementProductQuantity
} from './actions';

export const reducer = createReducer(
  initialState,
  on(addProductToCart, (state, action) => {
    const {sku, title, unitPrice, thumbnail } = action;
    const exists = state.cart.items.find((item) => item.sku === sku);
    if (exists) { // update item
      const newCartItems = state.cart.items.map((item) => item.sku === sku ? { ...item, quantity: item.quantity + 1, subTotal: item.unitPrice * (item.quantity + 1) } : item );
      const newGrandTotal = newCartItems.reduce((total, item) => total + (item.subTotal), 0);
        return {
        ...state,
        cart: {
          ...state.cart,
          grandTotal: newGrandTotal,
          items: newCartItems,
        },
      };
    } else { // add item
      const newCartItems = [...state.cart.items, { sku, title, unitPrice, quantity: 1, subTotal: unitPrice, thumbnail } ];
      const newGrandTotal = newCartItems.reduce((total, item) => total + item.subTotal, 0);
      return {
        ...state,
        cart: {
          ...state.cart,
          grandTotal: newGrandTotal,
          items: newCartItems
        },
      };
    }
  }),
  on(removeProductFromCart, (state, action) => {
    const existingItem = state.cart.items.find((item) => item.sku === action.sku);
    if (!existingItem) {
      return state;
    }
    const newCartItems = state.cart.items.filter((item) => item !== existingItem);
    const newGrandTotal = newCartItems.reduce((total, item) => total + item.subTotal, 0);
    return {
      ...state,
      cart: {
        ...state.cart,
        grandTotal: newGrandTotal,
        items: newCartItems
      },
    };
  }),
  on(incrementProductQuantity, (state, action) => {
    const newCartItems = state.cart.items.map((item) => item.sku === action.sku ? { ...item, quantity: item.quantity + 1, subTotal: item.unitPrice * (item.quantity + 1) } : item );
    const newGrandTotal = newCartItems.reduce((total, item) => total + (item.subTotal), 0);
    return {
      ...state,
      cart: {
        ...state.cart,
        grandTotal: newGrandTotal,
        items: newCartItems
      },
    };
  }),
  on(decrementProductQuantity, (state, action) => {
    const newCartItems = state.cart.items
      .map((item) => item.sku === action.sku ? { ...item, quantity: item.quantity - 1, subTotal: item.unitPrice * (item.quantity - 1) } : item )
      .filter((item) => item.subTotal > 0);
    const newGrandTotal = newCartItems.reduce((total, item) => total + item.subTotal, 0);
    return {
      ...state,
      cart: {
        ...state.cart,
        grandTotal: newGrandTotal,
        items: newCartItems
      },
    };
  })
);
