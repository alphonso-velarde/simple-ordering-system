import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProtectedRoute } from './shared/guards/admin-protected-route.guard';
import { PublicGuard } from './shared/guards/public-route.guard';
import { UserProtectedRoute } from './shared/guards/user-protected-route.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule), canActivate: [PublicGuard]},
  { path: 'orders', loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule), canActivate: [UserProtectedRoute]},
  { path: 'admin', loadChildren: () => import('./pages/orders-approval/orders-approval.module').then(m => m.OrdersApprovalModule), canActivate: [AdminProtectedRoute]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }