import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
} from 'rxjs/operators';

import { 
  Actions, 
  ofType, 
  createEffect 
} from '@ngrx/effects';

import { InventoryService } from '../../services/api/inventory.service';
import { InventoryActionTypes } from '../actions/inventory.action';

@Injectable()
export class InventoryEffect {
  constructor(
    private inventoryService: InventoryService,
    private actions$: Actions,
  ) {}


  public getInventory = createEffect(() =>
    this.actions$.pipe(
      // set type
      ofType(InventoryActionTypes.GET_INVENTORY),
      // switch to a new observable and cancel previous subscription
      switchMap(() => {
        return this.inventoryService.getInventory()
          .pipe(
            // return payload
            map((result: any) => {         
              return {
                type: InventoryActionTypes.GET_INVENTORY_SUCCESS,
                payload: result.inventories
              };
            }),
            catchError((error: any) =>
              // error handler
              of({
                type: InventoryActionTypes.GET_INVENTORY_FAIL,
                payload: error,
              }),
            ),
          );
      })
    ),
  )
}
