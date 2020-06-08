import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LocalStorageService } from '../../local-storage/local-storage.service';
import { localStorageConstants } from '../../../../constants/localStorage.constants';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  public session$: BehaviorSubject<User> = new BehaviorSubject(null);

  private _session: any = null;

  get session() {
    return this._session;
  }

  set session(session: User) {
    this.localStorageService.setItem(
      localStorageConstants.CURRENT_USER,
      session
    );
    this._session = session;
    this.session$.next(session);
  }

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    const user = this.localStorageService.getItem(
      localStorageConstants.CURRENT_USER
    );

    if (user) {
      this.session = user;
    }
  }

  login(body: { username: string; password: string }): Observable<User> {
    const { username, password } = body;
    // hash and do something with password;
    const user = new User().assign({ name: username });

    this.session = user;
    return of(user).pipe(delay(150));
  }

  logout(): Observable<void> {
    this.localStorageService.removeItem(localStorageConstants.CURRENT_USER);
    this._session = null;
    this.session = null;

    return of();
  }

  isLoggedIn(): boolean {
    return !!this.session;
  }
}
