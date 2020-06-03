import { AssignedObject } from './assignedObject.models';

export class Product extends AssignedObject {
  id: string = null;
  name: string = null;
  price: number = null;
  url: string = null;
}
