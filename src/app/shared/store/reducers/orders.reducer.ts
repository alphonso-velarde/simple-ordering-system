import { 
	OrdersAction,
	OrdersActionTypes
	
} from '../actions/orders.action';

// Create new interface for reducer
export interface OrdersState {
	customerOrders: any;
	pending: boolean;
	error: any;
	success: any;
}

export const ORDERS_INITIAL_STATE: OrdersState = {
	customerOrders: [],
	pending: false,
	error: null,
	success: null
}


export const OrdersReducer = (
	state: OrdersState = ORDERS_INITIAL_STATE,
	action: OrdersAction,
	): OrdersState => {
		switch (action.type){

			case OrdersActionTypes.GET_ORDERS:
			return { ...state, pending: true, success: null };

			case OrdersActionTypes.GET_ORDERS_SUCCESS:
			return { ...state, customerOrders:action.payload, pending: false }

			case OrdersActionTypes.GET_ORDERS_FAIL:
			return { ...state, pending: false, error: action.payload }

            case OrdersActionTypes.SAVE_ORDERS:
			return { ...state, customerOrders: [...state.customerOrders, action.payload]};

            case OrdersActionTypes.EDIT_ORDERS:
                return { ...state, customerOrders: state.customerOrders.map((value: any, index: any) => value.id === action.payload.id ? action.payload : value) };

            
			default:
			return state;
		}
	}
	
