import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DataTableHeader } from 'src/app/shared/components/data-table/models/data-table.model';
import { StoreState } from 'src/app/shared/store';
import { Subscription } from 'rxjs';
import { Subject, takeUntil } from 'rxjs';
import { OrdersState } from 'src/app/shared/store/reducers/orders.reducer';
import { MatDialog } from '@angular/material/dialog';
import { OrdersFormComponent } from '../orders-form/orders-form.component';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit, OnDestroy {
  
  private orders$: any;
  private req: Subscription = new Subscription;
  private unsubscribe$ = new Subject<void>();
  public loading: boolean = true;

  public ordersTableHeader: DataTableHeader[] = [
    {name: 'Make', field: 'make'},
    {name: 'Item', field: 'item'},
    {name: 'Quantity', field: 'quantity'},
    {name: 'Order Date', field: 'orderDate'},
    {name: 'Status', field: 'status'},
  ]

  public ordersData:any[] = []

  constructor(
    private orderStore: Store<StoreState>,
    private dialogRef: MatDialog, 
  ) { }

  ngOnInit(): void {
    this.orders$ = this.orderStore.pipe(select(state => state.orders));
    let _this = this;
    this.req =  this.orders$.subscribe((orders: OrdersState) => {
      this.loading = true;
      if(orders.customerOrders.length > 0){
        this.ordersData = orders.customerOrders;
      }

      setTimeout(
        function() {
          _this.loading = false;
      }, 500);
    })
  }

  editOrder(e: any){
    let editDialog = this.dialogRef.open(
      OrdersFormComponent,
      { 
        minWidth: '30vw',
        data: e,
      }
    );

    editDialog
    .afterClosed()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(result => {

    });
  }

  ngOnDestroy(): void {
    this.req.unsubscribe()
  }

}
