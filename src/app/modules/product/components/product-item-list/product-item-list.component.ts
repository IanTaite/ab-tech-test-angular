import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState, ProductItem } from '../../../../store/state';
import { selectI18n, selectProduct } from '../../../../store/selectors';
import { formatAmountAsPrice } from '../../../../helpers/formatAmountAsPrice';
import { loadProducts, addProductToCart } from '../../../../store/actions';

@Component({
  selector: 'ab-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.scss']
})
export class ProductItemListComponent implements OnInit {
  constructor(
    private store: Store<AppState>
  ) { }

  public i18nSlice$ = this.store.pipe(select(selectI18n));
  public productSlice$ = this.store.pipe(select(selectProduct));

  public log(something: any) { console.log(something) }

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }

  public addProductToCartClick(item: ProductItem) {
    this.store.dispatch(addProductToCart(item));
  }

  public formatPrice(locale: string, currency: string, amount: number): string {
    return formatAmountAsPrice(locale, currency, amount);
  }
}
