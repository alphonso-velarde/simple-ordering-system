import { 
	AuthAction,
	AuthActionTypes
	
} from '../actions/auth.action';

// Create new interface for reducer
export interface AuthState {
	auth: any;
	pending: boolean;
	error: any;
	success: any;
}

export const AUTH_INITIAL_STATE: AuthState = {
	auth: {},
	pending: false,
	error: null,
	success: null
}


export const AuthReducer = (
	state: AuthState = AUTH_INITIAL_STATE,
	action: AuthAction,
	): AuthState => {
		switch (action.type){

			case AuthActionTypes.GET_AUTH:
			return { ...state, pending: true, success: null };

			case AuthActionTypes.GET_AUTH_SUCCESS:
			return { ...state, auth:action.payload, pending: false }

			case AuthActionTypes.GET_AUTH_FAIL:
			return { ...state, pending: false, error: action.payload }

			default:
			return state;
		}
	}
	
