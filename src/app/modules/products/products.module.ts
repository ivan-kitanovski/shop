import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductGridComponent } from './products-grid/products-grid.component';
import { ProductListComponent } from './products-list/products-list.component';
import { ProductGridItemComponent } from './products-grid/product-grid-item/product-grid-item.component';
import { ProductListItemComponent } from './products-list/product-list-item/product-list-item.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductGridComponent,
    ProductListComponent,
    ProductGridItemComponent,
    ProductListItemComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ScrollingModule,
    VirtualScrollerModule,
    FontAwesomeModule
  ],
  exports: [
    ProductListComponent,
    ProductGridComponent
  ]
})
export class ProductsModule {}
