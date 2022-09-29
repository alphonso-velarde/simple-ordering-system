import { Action } from '@ngrx/store';

/* FOR ORDERS  
*/
export const enum OrdersActionTypes {
	GET_ORDERS = '[Orders] Get Orders', 
	GET_ORDERS_SUCCESS = '[Orders] Get Orders Success', 
	GET_ORDERS_FAIL = '[Orders] Get Orders Fail', 

    SAVE_ORDERS = '[Orders] Save Orders', 
	EDIT_ORDERS = '[Orders] Edit Orders', 
}

export class GetOrders implements Action {
	public readonly type = OrdersActionTypes.GET_ORDERS;
	constructor(public payload: any) { }
}

export class GetOrdersSuccess implements Action {
	public readonly type = OrdersActionTypes.GET_ORDERS_SUCCESS;
	constructor(public payload: any) { }
}

export class GetOrdersFail implements Action {
	public readonly type = OrdersActionTypes.GET_ORDERS_FAIL;
	constructor(public payload: any) { }
}

export class SaveOrders implements Action {
	public readonly type = OrdersActionTypes.SAVE_ORDERS;
	constructor(public payload: any) { }
}

export class EditOrders implements Action {
	public readonly type = OrdersActionTypes.EDIT_ORDERS;
	constructor(public payload: any) { }
}


export type OrdersAction =
	GetOrders
|	GetOrdersSuccess
|  	GetOrdersFail
|   SaveOrders
|   EditOrders;

