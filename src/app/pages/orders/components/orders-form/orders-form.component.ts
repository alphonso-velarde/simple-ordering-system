import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { StoreState } from 'src/app/shared/store';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { InventoryState } from 'src/app/shared/store/reducers/inventory.reducer';
import { InventoryActionTypes } from 'src/app/shared/store/actions/inventory.action';
import { OrdersActionTypes } from 'src/app/shared/store/actions/orders.action';

@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.scss'],
})
export class OrdersFormComponent implements OnInit, OnDestroy {
  private inventory$: any;
  private req: Subscription = new Subscription();
  private unsubscribe$ = new Subject<void>();

  public orderForm!: UntypedFormGroup;
  public image: any = null;
  public modalHeading: string = 'Create Order';
  public inventoryList: any[] = [];
  public makeOptions: any[] = [];
  public itemList: any[] = [];
  public userData: any = localStorage.getItem('userData');

  constructor(
    private formBuilder: UntypedFormBuilder,
    public dialogRef: MatDialogRef<OrdersFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private inventoryStore: Store<StoreState>
  ) {}

  ngOnInit(): void {
    this.userData = JSON.parse(this.userData);
    this.modalHeading = this.data ? 'Edit Order' : 'Create Orders';
    this.orderForm = this.formBuilder.group({
      make: [this.data ? this.data.make : '', [Validators.required]],
      item: [this.data ? this.data.item : '', [Validators.required]],
      quantity: [this.data ? this.data.quantity : '', [Validators.required]],
    });

    this.inventory$ = this.inventoryStore.pipe(
      select((state) => state.inventory)
    );

    this.req = this.inventory$.subscribe((inventory: InventoryState) => {
      if (Array.isArray(inventory.inventory)) {
        this.inventoryList = inventory.inventory;
        inventory.inventory.forEach((element: any) => {
          if (!this.makeOptions.includes(element.make)) {
            this.makeOptions.push(element.make);
          }
        });
      }
    });

    this.inventoryStore.dispatch({
      type: InventoryActionTypes.GET_INVENTORY,
    });

    this.orderForm.get('make')?.valueChanges.subscribe((item) => {
      this.populateItemList();
    });

    if (this.data?.make) {
      this.populateItemList();
    }
  }

  populateItemList() {
    this.itemList = [];
    this.inventoryList.forEach((element) => {
      if (element.make === this.orderForm.controls['make'].value) {
        this.itemList.push(element.item);
      }
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save() {
    if (this.orderForm.valid) {
      if (!this.data) {
        let data = {
          ...this.orderForm.value,
          id: (Math.random() + 1).toString(36).substring(7),
          orderDate: new Date(),
          user: this.userData.user,
          status: 'Pending',
        };

        this.inventoryStore.dispatch({
          type: OrdersActionTypes.SAVE_ORDERS,
          payload: data,
        });
      } else {
        let data = {
          ...this.orderForm.value,
          id: this.data.id,
          orderDate: this.data.orderDate,
          user: this.data.user,
          status: this.data.status,
        };

        this.inventoryStore.dispatch({
          type: OrdersActionTypes.EDIT_ORDERS,
          payload: data,
        });
      }
    }
  }

  ngOnDestroy(): void {
    this.req.unsubscribe();
  }
}
