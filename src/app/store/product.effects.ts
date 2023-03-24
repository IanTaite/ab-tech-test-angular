import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadProducts,
  loadProductsError,
  loadProductsSuccess,
} from '../store/actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from '../services/product.service';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((products) => loadProductsSuccess({ items: products })),
          catchError((err) => of(loadProductsError(err)))
        )
      )
    )
  );
  constructor(
    private actions$: Actions, // this is an RxJS stream of all actions
    private productService: ProductService // we will need this service for API calls
  ) {}
}
