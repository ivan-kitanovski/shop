import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Customer } from '../../models/customer.model';
import { delay, map } from 'rxjs/operators';
import { CUSTOMERS } from '../../../../constants/customers';

@Injectable({
  providedIn: 'root',
})
export class CustomerApiService {
  private $customers = new BehaviorSubject<Customer[]>([]);

  getCustomers(): Observable<Customer[]> {
    let customers = this.$customers.getValue();

    if (customers.length === 0) {
      customers = this.init();
    }
    return of(customers)
      .pipe(delay(150))
      .pipe(map((response) => {
        return response.map((c) => new Customer().assign(c));
      }));
  }

  getCustomer(id: string): Observable<Customer> {
    let customers = this.$customers.getValue();

    if (customers.length === 0) {
      customers = this.init();
    }
    const index = customers.findIndex(c => c.id === id);

    if (index === -1) {
      return throwError(new Error(`Couldn't find customer with supplied id`));
    } else {
      return of(customers[index]).pipe(delay(150));
    }
  }

  createCustomer(body: Customer): Observable<Customer> {
    let customers = this.$customers.getValue();

    if (customers.length === 0) {
      customers = this.init();
    }

    const customer = new Customer().assign(body);
    customer.id = Date.now().toString();
    const customersUpdated = [customer, ...customers];
    this.$customers.next(customersUpdated);

    return of(customer).pipe(delay(150));
  }

  private init() {
    const customers = CUSTOMERS.map(c => new Customer().assign(c));
    this.$customers.next(customers);
    return customers;
  }
}
