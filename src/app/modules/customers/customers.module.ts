import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerItemComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ScrollingModule,
    VirtualScrollerModule,
    FontAwesomeModule
  ],
})
export class CustomersModule {}
