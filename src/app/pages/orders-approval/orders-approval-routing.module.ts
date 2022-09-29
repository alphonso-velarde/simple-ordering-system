import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersApprovalComponent } from './orders-approval.component';

const routes: Routes = [
  { path: '', component: OrdersApprovalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersApprovalRoutingModule { }