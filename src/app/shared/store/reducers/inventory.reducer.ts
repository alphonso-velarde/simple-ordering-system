import { 
	InventoryAction,
	InventoryActionTypes
	
} from '../actions/inventory.action';

// Create new interface for reducer
export interface InventoryState {
	inventory: any;
	pending: boolean;
	error: any;
	success: any;
}

export const INVENTORY_INITIAL_STATE: InventoryState = {
	inventory: {},
	pending: false,
	error: null,
	success: null
}


export const InventoryReducer = (
	state: InventoryState = INVENTORY_INITIAL_STATE,
	action: InventoryAction,
	): InventoryState => {
		switch (action.type){

			case InventoryActionTypes.GET_INVENTORY:
			return { ...state, pending: true, success: null };

			case InventoryActionTypes.GET_INVENTORY_SUCCESS:
			return { ...state, inventory:action.payload, pending: false }

			case InventoryActionTypes.GET_INVENTORY_FAIL:
			return { ...state, pending: false, error: action.payload }

			default:
			return state;
		}
	}
	
