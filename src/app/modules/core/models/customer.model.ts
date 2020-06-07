import { Product } from './product.model';
import { AssignedObject } from './assignedObject.models';
import { PRODUCTS } from '../../../constants/products';

export class Customer extends AssignedObject {
  id: string = null;
  name: string = null;
  email: string = null;
  purchasedProducts: Product[] = [];
  total = 0;
  createdDate: Date = null;

  afterAssign() {
    const random = this.getRandomInt(1, 20);
    this.purchasedProducts = PRODUCTS.slice(5, random).map(p => new Product().assign(p));
    this.createdDate = this.randomDate(new Date('01/01/2010'), new Date(), 0, 24);
    this.total = (this.purchasedProducts || []).map(p => p.price).reduce((total, price) => total + price, 0);
  }

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private randomDate(start: any, end: any, startHour: number, endHour: number) {
    const date = new Date(+start + Math.random() * (end - start));
    const hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
  }
}
