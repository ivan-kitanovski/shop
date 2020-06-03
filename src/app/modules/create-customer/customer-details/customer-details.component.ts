import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerApiService } from '../../core/api/customer/customer-api.service';
import { Customer } from '../../core/models/customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  public customer: Customer = null;

  constructor(private customerApiService: CustomerApiService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(v => {
      this.customerApiService.getCustomer(v.id).subscribe(c => {
        this.customer = c;
      });
    });
  }

}
