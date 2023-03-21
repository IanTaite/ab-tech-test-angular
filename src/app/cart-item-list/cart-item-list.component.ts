import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState, CartItem } from '../store/state';
import { selectLocale, selectCurrency, selectCart } from '../store/selectors';
import { formatAmountAsPrice } from '../helpers/formatAmountAsPrice';
import {
  removeProductFromCart,
  incrementProductQuantity,
  decrementProductQuantity
} from '../store/actions';

@Component({
  selector: 'ab-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss']
})
export class CartItemListComponent {
  constructor(
    private store: Store<AppState>
  ) { }

  public cart$ = this.store.pipe(select(selectCart));
  public locale$ = this.store.pipe(select(selectLocale));
  public currency$ = this.store.pipe(select(selectCurrency));

  public removeProductFromCartClick(item: CartItem) {
    this.store.dispatch(removeProductFromCart(item));
  }

  public incrementProductQuantityClick(item: CartItem) {
    this.store.dispatch(incrementProductQuantity(item));
  }

  public decrementProductQuantityClick(item: CartItem) {
    this.store.dispatch(decrementProductQuantity(item));
  }

  public formatPrice(locale: string, currency: string, amount: number): string {
    return formatAmountAsPrice(locale, currency, amount);
  }
}
