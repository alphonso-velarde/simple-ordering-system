import * as auth from './reducers/auth.reducer';
import * as inventory from './reducers/inventory.reducer';
import * as orders from './reducers/orders.reducer';

export interface StoreState {
    auth: auth.AuthState,
    inventory: inventory.InventoryState,
    orders: orders.OrdersState
}

export const INITIAL_STATE: StoreState = {
    auth: auth.AUTH_INITIAL_STATE,
    inventory: inventory.INVENTORY_INITIAL_STATE,
    orders: orders.ORDERS_INITIAL_STATE
}

export const routerStateConfig = {
    stateKey: 'router', // state-slice name for routing state
};