import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { OrdersFormComponent } from './components/orders-form/orders-form.component';


@NgModule({
  imports: [ 
    CommonModule,
    SharedModule,
    OrdersRoutingModule,
  ],
  declarations: [
    OrdersComponent,
    OrdersTableComponent,
    OrdersFormComponent
  ],
})
export class OrdersModule { }