import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

  @Input() products: Product[];
  @Output() deleteProduct = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteProduct(id: string) {
    this.deleteProduct.emit(id);
  }

}
