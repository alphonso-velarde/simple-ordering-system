import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DataTableHeader } from 'src/app/shared/components/data-table/models/data-table.model';
import { StoreState } from 'src/app/shared/store';
import { Subscription } from 'rxjs';
import { Subject, takeUntil } from 'rxjs';
import { OrdersState } from 'src/app/shared/store/reducers/orders.reducer';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/shared/components/dialogs/confirmation/confirmation.component';
import { OrdersActionTypes } from 'src/app/shared/store/actions/orders.action';

@Component({
  selector: 'app-orders-approval-table',
  templateUrl: './orders-approval-table.component.html',
  styleUrls: ['./orders-approval-table.component.scss']
})
export class OrdersApprovalTableComponent implements OnInit, OnDestroy {
  
  private orders$: any;
  private req: Subscription = new Subscription;
  private unsubscribe$ = new Subject<void>();

  public ordersTableHeader: DataTableHeader[] = [
    {name: 'Requestor', field: 'user'},
    {name: 'Make', field: 'make'},
    {name: 'Item', field: 'item'},
    {name: 'Quantity', field: 'quantity'},
    {name: 'Order Date', field: 'orderDate'},
    {name: 'Status', field: 'status'},
  ]

  public ordersData = []
  public loading: boolean = true;

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

  ngOnDestroy(): void {
    this.req.unsubscribe()
  }

  openConfirmationModal(e: any){
    let editDialog = this.dialogRef.open(
      ConfirmationComponent,
      { 
        minWidth: '30vw',
        data: e,
      }
    );

    editDialog
    .afterClosed()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(result => {

      if(result){
        if(e.action === 'approve'){
          let data = {
            ...e,
            status: 'Approved'
          }
          delete e['action'];
          this.orderStore.dispatch({
            type: OrdersActionTypes.EDIT_ORDERS,
            payload: data,
          });
        } else if (e.action === 'decline'){
          let data = {
            ...e,
            status: 'Declined'
          }
          delete e['action'];
          this.orderStore.dispatch({
            type: OrdersActionTypes.EDIT_ORDERS,
            payload: data,
          });
        }
      }
      
    });
  }

}
