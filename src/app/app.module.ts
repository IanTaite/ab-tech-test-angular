import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from './store/reducer';

import { CartItemListComponent } from './cart-item-list/cart-item-list.component';
import { CartPaneComponent } from './cart-pane/cart-pane.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ProductItemListComponent } from './product-item-list/product-item-list.component';
import { ProductPaneComponent } from './product-pane/product-pane.component';
import { ProductTileWithThumbComponent } from './product-tile-with-thumb/product-tile-with-thumb.component';

@NgModule({
  declarations: [
    AppComponent,
    CartItemListComponent,
    CartPaneComponent,
    PageHeaderComponent,
    ProductItemListComponent,
    ProductPaneComponent,
    ProductTileWithThumbComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ app: reducer}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
