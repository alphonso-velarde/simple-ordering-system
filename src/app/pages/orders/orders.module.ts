import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';


@NgModule({
  imports: [ 
    CommonModule,
    SharedModule,
    OrdersRoutingModule,
  ],
  declarations: [
    OrdersComponent
  ],
})
export class OrdersModule { }