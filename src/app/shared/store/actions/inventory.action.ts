import { Action } from '@ngrx/store';

/* FOR INVENTORY  
*/
export const enum InventoryActionTypes {
	GET_INVENTORY = '[Inventory] Get Inventory', 
	GET_INVENTORY_SUCCESS = '[Inventory] Get Inventory Success', 
	GET_INVENTORY_FAIL = '[Inventory] Get Inventory Fail', 
	
}

export class GetInventory implements Action {
	public readonly type = InventoryActionTypes.GET_INVENTORY;
	constructor(public payload: any) { }
}

export class GetInventorySuccess implements Action {
	public readonly type = InventoryActionTypes.GET_INVENTORY_SUCCESS;
	constructor(public payload: any) { }
}

export class GetInventoryFail implements Action {
	public readonly type = InventoryActionTypes.GET_INVENTORY_FAIL;
	constructor(public payload: any) { }
}

export type InventoryAction =
	GetInventory
|	GetInventorySuccess
|  	GetInventoryFail;


