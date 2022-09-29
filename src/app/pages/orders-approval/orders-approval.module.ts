import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdersApprovalRoutingModule } from './orders-approval-routing.module';
import { OrdersApprovalComponent } from './orders-approval.component';
import { OrdersApprovalTableComponent } from './components/orders-approval-table/orders-approval-tablecomponent';


@NgModule({
  imports: [ 
    CommonModule,
    SharedModule,
    OrdersApprovalRoutingModule,
  ],
  declarations: [
    OrdersApprovalComponent,
    OrdersApprovalTableComponent,
  ],
}) 
export class OrdersApprovalModule { }