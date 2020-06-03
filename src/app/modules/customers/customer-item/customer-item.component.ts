import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Customer } from '../../core/models/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerItemComponent implements OnInit {

  @Input() customer: Customer = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDetails() {
    this.router.navigate(['customer', this.customer.id]);
  }

}
