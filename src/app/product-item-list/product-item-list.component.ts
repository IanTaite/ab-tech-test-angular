import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState, ProductItem } from '../store/state';
import { selectLocale, selectCurrency, selectProducts } from '../store/selectors';
import { formatAmountAsPrice } from '../helpers/formatAmountAsPrice';
import { forkJoin, first } from 'rxjs';
import { addProductToCart } from '../store/actions';

@Component({
  selector: 'ab-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.scss']
})
export class ProductItemListComponent implements OnInit {
  constructor(
    private store: Store<AppState>
  ) { }

  public allDataAvailable = false;
  public products: ProductItem[] = [];
  private locale = '';
  private currency = '';

  ngOnInit() {
    forkJoin([
      this.store.pipe(select(selectProducts), first()),
      this.store.pipe(select(selectLocale), first()),
      this.store.pipe(select(selectCurrency), first())
    ]).subscribe(([products, locale, currency]) => {
      this.products = products;
      this.locale = locale;
      this.currency = currency;
      this.allDataAvailable = true;
    });
  }

  public addProductToCartClick(item: ProductItem) {
    this.store.dispatch(addProductToCart(item));
  }

  public formatPrice(amount: number): string {
    return formatAmountAsPrice(this.locale, this.currency, amount);
  }
}
