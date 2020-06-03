import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthApiService } from '../../core/api/auth/auth-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm = this.formBuilder.group(
    {
      username: ['', Validators.required],
      password: ['', Validators.required],
    },
    { updateOn: 'change' }
  );

  get username(): string {
    return this.loginForm.get('username').value;
  }

  get password(): string {
    return this.loginForm.get('password').value;
  }

  get isDisabled(): boolean {
    return !this.username || !this.password;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authApiService: AuthApiService,
    private router: Router
  ) {}

  ngOnInit() {}

  public login() {
    this.authApiService
      .login({
        username: this.username,
        password: this.password,
      })
      .subscribe((user) => this.router.navigate(['products']));
  }
}
