import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductApiService } from '../core/api/product/product-api.service';
import { Product } from '../core/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  public productForm = this.formBuilder.group(
    {
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required, Validators.min(1)]],
    },
    { updateOn: 'change' }
  );
  public isModalActive = false;

  get nameControl() {
    return this.productForm.get('name');
  }

  get priceControl() {
    return this.productForm.get('price');
  }

  constructor(
    private formBuilder: FormBuilder,
    private productApiService: ProductApiService,
    private router: Router
  ) {}

  createProduct() {
    this.nameControl.markAsTouched();
    this.priceControl.markAsTouched();

    if (this.productForm.valid) {
      const product = new Product().assign({
        name: this.nameControl.value,
        price: this.priceControl.value,
      });
      this.productApiService
        .createProduct(product)
        .subscribe((o) => (this.isModalActive = true));
    }
  }

  onConfirm() {
    this.productForm.reset();
    this.isModalActive = false;
  }

  onCancel() {
    this.router.navigate(['products']);
    this.isModalActive = false;
  }
}
