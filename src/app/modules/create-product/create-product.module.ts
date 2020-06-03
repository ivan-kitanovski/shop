import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateProductRoutingModule } from './create-product-routing.module';
import { CreateProductComponent } from './create-product.component';
import { ModalModule } from '../shared/modal/modal.module';


@NgModule({
  declarations: [CreateProductComponent],
  imports: [
    CommonModule,
    CreateProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ]
})
export class CreateProductModule { }
