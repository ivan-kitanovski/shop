import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './modules/core/api/auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    data: {
      name: 'login',
      access: 'public'
    },
    loadChildren: () =>
      import('./modules/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'products',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'product',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/create-product/create-product.module').then(
        (m) => m.CreateProductModule
      ),
  },
  {
    path: 'customers',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
  },
  {
    path: 'customer',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/create-customer/create-customer.module').then(
        (m) => m.CreateCustomerModule
      ),
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
