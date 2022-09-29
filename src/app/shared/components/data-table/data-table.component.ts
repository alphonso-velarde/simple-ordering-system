import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataTableHeader } from './models/data-table.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() data: any[] = [];
  @Input() columns: DataTableHeader[] = [];
  @Input() programType: any;
  @Input() withActions: boolean = false;
  @Input() editAction: boolean = false;
  @Input() deleteAction: boolean = false;
  @Input() isEditOnly: boolean = false;

  @Output() editEmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() approveEmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() declineEmit: EventEmitter<any> = new EventEmitter<any>();

  public colSpan:Number = 0;
  private onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return -1;
  }

  ImagePath = 'assets/img/icons/reward';

  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.colSpan = this.withActions || this.isEditOnly ? this.columns.length + 1 : this.columns.length;
  }

  edit(row: any){
    this.editEmit.emit(row);
  }

  approve(row: any){
    let data = {
      ...row,
      action: 'approve'
    }
    this.approveEmit.emit(data);
  }

  decline(row: any){
    let data = {
      ...row,
      action: 'decline'
    }
    this.declineEmit.emit(data);
  }
  

}