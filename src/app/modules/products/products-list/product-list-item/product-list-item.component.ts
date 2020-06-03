import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListItemComponent {
  @Input() product: Product;
  @Input() canDelete = true;

  @Output() deleteProduct = new EventEmitter();

  private colors = ['#ffe0b2', '#c8e6c9', '#bbdefb', '#d1c4e9', '#ffcdd2'];
  public color = this.colors[Math.floor(Math.random() * this.colors.length)];

  onDeleteProduct() {
    this.deleteProduct.emit(null);
  }

  getRandomImage() {
    return `https://source.unsplash.com/random/200x200/?product?sig=${Math.floor(Math.random() * 1000) + 1}`;
  }
}
