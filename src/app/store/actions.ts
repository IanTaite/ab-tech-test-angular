import { createAction, props } from "@ngrx/store";
import { ProductItem, CartItem } from "./state";

export const addProductToCart = createAction(
  "[Cart] add product",
  props<ProductItem>()
);

export const removeProductFromCart = createAction(
  "[Cart] remove product",
  props<CartItem>()
);

export const incrementProductQuantity = createAction(
  "[Cart] increment product quantity",
  props<CartItem>()
);

export const decrementProductQuantity = createAction(
  "[Cart] decrement product quantity",
  props<CartItem>()
);
