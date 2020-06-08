import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerApiService } from '../core/api/customer/customer-api.service';
import { Customer } from '../core/models/customer.model';
import { Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit, OnDestroy {
  public customers: Customer[] = [];

  constructor(
    private customerApiService: CustomerApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.customerApiService.getCustomers().pipe(untilDestroyed(this)).subscribe((c) => {
      this.customers = c;
    });
  }

  ngOnDestroy() {}

  public addCustomer() {
    this.router.navigate(['customer']);
  }
}
