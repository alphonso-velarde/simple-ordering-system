import * as auth from './reducers/auth.reducer';

export interface StoreState {
    auth: auth.AuthState,
}

export const INITIAL_STATE: StoreState = {
    auth: auth.AUTH_INITIAL_STATE,
}

export const routerStateConfig = {
    stateKey: 'router', // state-slice name for routing state
};