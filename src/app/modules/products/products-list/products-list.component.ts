import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];
  @Input() canDelete = true;
  @Output() deleteProduct = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteProduct(id: string) {
    this.deleteProduct.emit(id);
  }

}
