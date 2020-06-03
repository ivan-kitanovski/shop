import { Product } from './product.model';
import { AssignedObject } from './assignedObject.models';
import { PRODUCTS } from '../../../constants/products';

export class Customer extends AssignedObject {
  id: string = null;
  name: string = null;
  email: string = null;
  purchasedProducts: Product[];

  afterAssign() {
    const random = this.getRandomInt(1, 20);
    this.purchasedProducts = PRODUCTS.slice(5, random).map(p => new Product().assign(p));
  }

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
}
