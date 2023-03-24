import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './shell/app/app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from './store/reducer';

import { ProductEffects } from './store/product.effects';

import { CartItemListComponent } from './modules/cart/components/cart-item-list/cart-item-list.component';
import { CartPaneComponent } from './modules/cart/components/cart-pane/cart-pane.component';
import { PageHeaderComponent } from './shell/page-header/page-header.component';
import { ProductItemListComponent } from './modules/product/components/product-item-list/product-item-list.component';
import { ProductPaneComponent } from './modules/product/components/product-pane/product-pane.component';
import { ProductTileWithThumbComponent } from './shared/components/product-tile-with-thumb/product-tile-with-thumb.component';

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
    HttpClientModule,
    StoreModule.forRoot({ app: reducer}),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 5, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
