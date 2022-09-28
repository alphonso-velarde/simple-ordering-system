import { Action } from '@ngrx/store';

/* FOR AUTH  
*/
export const enum AuthActionTypes {
	GET_AUTH = '[Auth] Get Auth', 
	GET_AUTH_SUCCESS = '[Auth] Get Auth Success', 
	GET_AUTH_FAIL = '[Auth] Get Auth Fail', 
	
}

export class GetAuth implements Action {
	public readonly type = AuthActionTypes.GET_AUTH;
	constructor(public payload: any) { }
}

export class GetAuthSuccess implements Action {
	public readonly type = AuthActionTypes.GET_AUTH_SUCCESS;
	constructor(public payload: any) { }
}

export class GetAuthFail implements Action {
	public readonly type = AuthActionTypes.GET_AUTH_FAIL;
	constructor(public payload: any) { }
}

export type AuthAction =
	GetAuth
|	GetAuthSuccess
|  	GetAuthFail;


