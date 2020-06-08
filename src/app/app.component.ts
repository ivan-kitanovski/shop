import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthApiService } from './modules/core/api/auth/auth-api.service';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  title = 'demo';
  showHeader = true;

  constructor(private authApiService: AuthApiService, private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((e: NavigationStart) => this.showHeader = e.url !== '/login');
  }
}
