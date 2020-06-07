import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Customer } from '../../core/models/customer.model';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerItemComponent implements OnInit {

  @Input() customer: Customer = null;

  faEdit = faEdit;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDetails() {
    this.router.navigate(['customer', this.customer.id]);
  }

}
