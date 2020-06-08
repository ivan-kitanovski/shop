import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerApiService } from '../core/api/customer/customer-api.service';
import { Customer } from '../core/models/customer.model';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent implements OnInit {
  public customerForm = this.formBuilder.group(
    {
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    },
    { updateOn: 'change' }
  );
  public isModalActive = false;

  get nameControl() {
    return this.customerForm.get('name');
  }

  get emailControl() {
    return this.customerForm.get('email');
  }

  constructor(
    private formBuilder: FormBuilder,
    private customerApiService: CustomerApiService,
    private router: Router
  ) {}

  ngOnInit(): void { }

  createCustomer() {
    this.nameControl.markAsTouched();
    this.emailControl.markAsTouched();

    if (this.customerForm.valid) {
      const customer = new Customer().assign({
        name: this.nameControl.value,
        email: this.emailControl.value
      });
      this.customerApiService.createCustomer(customer).subscribe(o => this.isModalActive = true);
    }
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
