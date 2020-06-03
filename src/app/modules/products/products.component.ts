import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/product.model';
import { faTh, faList, faGripLines } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from '../core/local-storage/local-storage.service';
import { localStorageConstants } from '../../constants/localStorage.constants';
import { ProductApiService } from '../core/api/product/product-api.service';

const VIEW_MODE = {
  LIST: 'list',
  GRID: 'grid',
  MIX: 'mixed',
};

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];

  faTh = faTh;
  faList = faList;
  faGripLines = faGripLines;
  modes = VIEW_MODE;
  activeMode = VIEW_MODE.MIX;

  constructor(
    private localStorageService: LocalStorageService,
    private productApiService: ProductApiService
  ) {}

  ngOnInit() {
    this.activeMode =
      this.localStorageService.getItem(localStorageConstants.VIEW_MODE) ||
      VIEW_MODE.MIX;
    this.productApiService.getProducts().subscribe(p => {
      this.products = p;
    });
  }

  changeMode(mode: string) {
    this.activeMode = mode;
    this.localStorageService.setItem(localStorageConstants.VIEW_MODE, mode);
  }

  deleteProductHandler(id: string) {
    this.productApiService.deleteProduct(id).subscribe(o => this.products = o);
  }
}
