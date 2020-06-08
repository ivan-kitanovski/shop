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
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    },
    { updateOn: 'change' }
  );

  get usernameControl() {
    return this.loginForm.get('username');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }

  constructor(
    private formBuilder: FormBuilder,
    private authApiService: AuthApiService,
    private router: Router
  ) {}

  ngOnInit() {}

  public login() {
    this.usernameControl.markAsTouched();
    this.passwordControl.markAsTouched();

    if (this.loginForm.valid) {
      this.authApiService
        .login({
          username: this.usernameControl.value,
          password: this.passwordControl.value,
        })
        .subscribe((user) => this.router.navigate(['products']));
    }

  }

  public onAlert(text: string) {
    alert(text);
  }
}
