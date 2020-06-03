import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerApiService } from '../core/api/customer/customer-api.service';
import { Customer } from '../core/models/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent implements OnInit {
  public customerForm = this.formBuilder.group(
    {
      name: ['', Validators.required],
      email: [null, Validators.required],
    },
    { updateOn: 'change' }
  );
  public isModalActive = false;

  get name() {
    return this.customerForm.get('name').value;
  }

  get email() {
    return this.customerForm.get('email').value;
  }

  constructor(
    private formBuilder: FormBuilder,
    private customerApiService: CustomerApiService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createCustomer() {
    const customer = new Customer().assign({
      name: this.name,
      email: this.email
    });
    this.customerApiService.createCustomer(customer).subscribe(o => this.isModalActive = true);
  }

  onConfirm() {
    this.customerForm.reset();
    this.isModalActive = false;
  }

  onCancel() {
    this.router.navigate(['customers']);
    this.isModalActive = false;
  }
}
