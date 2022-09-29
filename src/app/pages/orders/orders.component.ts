import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrdersFormComponent } from './components/orders-form/orders-form.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(
    private dialogRef: MatDialog, 
  ) { }

  ngOnInit(): void {
  }

  openOrderForm(){
    this.dialogRef.open(OrdersFormComponent)
  }

}
