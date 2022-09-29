import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-orders-approval',
  templateUrl: './orders-approval.component.html',
  styleUrls: ['./orders-approval.component.scss']
})
export class OrdersApprovalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialog, 
  ) { }

  ngOnInit(): void {
  }

}
