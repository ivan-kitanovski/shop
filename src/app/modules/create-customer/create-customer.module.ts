import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateCustomerRoutingModule } from './create-customer-routing.module';
import { CreateCustomerComponent } from './create-customer.component';
import { ModalModule } from '../shared/modal/modal.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ProductsModule } from '../products/products.module';


@NgModule({
  declarations: [CreateCustomerComponent, CustomerDetailsComponent],
  imports: [
    CommonModule,
    CreateCustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    ProductsModule
  ]
})
export class CreateCustomerModule { }
