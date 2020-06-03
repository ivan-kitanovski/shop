import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { Product } from '../../models/product.model';
import { PRODUCTS } from 'src/app/constants/products';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  private $products = new BehaviorSubject<Product[]>([]);

  getProducts(): Observable<Product[]> {
    let products = this.$products.getValue();

    if (products.length === 0) {
      products = this.init();
    }
    return of(products)
      .pipe(delay(150))
      .pipe(map((response) => response.map((p) => new Product().assign(p))));
  }

  createProduct(body: Product): Observable<Product> {
    let products = this.$products.getValue();

    if (products.length === 0) {
      products = this.init();
    }

    const product = new Product().assign(body);
    product.id = Date.now().toString();
    const productsUpdated = [product, ...products];
    this.$products.next(productsUpdated);

    return of(product).pipe(delay(150));
  }

  deleteProduct(id: string): Observable<Product[]> {
    const products = this.$products.getValue();
    const index = products.findIndex((p) => p.id === id);
    const productsUpdated = products.filter((p) => p.id !== id);
    this.$products.next(productsUpdated);

    if (index === -1) {
      return throwError(new Error(`Couldn't find product with supplied id`));
    } else {
      return of(productsUpdated).pipe(delay(150));
    }
  }

  private init() {
    const products = PRODUCTS.map((c) => new Product().assign(c));
    this.$products.next(products);
    return products;
  }
}
