import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../core/api/customer/customer-api.service';
import { Customer } from '../core/models/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public customers: Customer[] = [];

  constructor(private customerApiService: CustomerApiService) { }

  ngOnInit() {
    this.customerApiService.getCustomers().subscribe(c => {
      this.customers = c;
    });
  }

}
