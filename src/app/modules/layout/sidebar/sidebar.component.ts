import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { EventBroadcasterService } from '../../core/event-broadcaster/event-broadcaster.service';
import { eventConstants } from '../../../constants/event.constants';
import { AuthApiService } from '../../core/api/auth/auth-api.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

const ROUTES = [
  { name: 'Products', tree: ['/products'] },
  { name: 'Customers', tree: ['/customers'] },
  { name: 'Create product', tree: ['/product'] },
  { name: 'Create customer', tree: ['/customer'] },
  { name: 'Log out', tree: ['/login'], shouldLogout: true },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SidebarComponent implements OnInit, OnDestroy {
  isActive = false;
  displayName = '';
  routes = ROUTES;

  constructor(
    private eventBroadcaster: EventBroadcasterService,
    private authApiService: AuthApiService
  ) {}

  ngOnInit() {
    this.authApiService.session$.subscribe(user => {
      this.displayName = user?.name;
    });

    this.eventBroadcaster
      .on(eventConstants.OPEN_SIDEBAR)
      .pipe(untilDestroyed(this))
      .subscribe((o) => (this.isActive = true));
  }

  ngOnDestroy() {}

  closeSidebar(shouldLogout: boolean) {
    this.isActive = false;
    if (shouldLogout) {
      this.authApiService.logout();
    }
  }
}
