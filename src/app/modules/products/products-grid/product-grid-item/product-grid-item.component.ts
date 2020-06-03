import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductGridItemComponent {

  @Input() product: Product;
  @Output() deleteProduct = new EventEmitter();

  private colors = ['#ffe0b2', '#c8e6c9', '#bbdefb', '#d1c4e9', '#ffcdd2'];
  public color = this.colors[Math.floor(Math.random() * this.colors.length)];

  constructor() { }

  onDeleteProduct() {
    this.deleteProduct.emit(null);
  }

  getRandomImage() {
    return `https://source.unsplash.com/random/200x200/?product?sig=${Math.floor(Math.random() * 1000) + 1}`;
  }

}
