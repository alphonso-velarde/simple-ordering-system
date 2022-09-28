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

import { AuthService } from '../../services/api/auth.service';
import { AuthActionTypes } from '../actions/auth.action';

@Injectable()
export class AuthEffect {
  constructor(
    private authService: AuthService,
    private actions$: Actions,
  ) {}


  public getAuth = createEffect(() =>
    this.actions$.pipe(
      // set type
      ofType(AuthActionTypes.GET_AUTH),
      // switch to a new observable and cancel previous subscription
      switchMap((data: any) => {
        return this.authService.getAuth()
          .pipe(
            // return payload
            map((result: any) => {         
              let ret = null;
              result.users?.forEach((element: any) => {
                if(element.name === data.payload.userName && element.password === data.payload.password){
                  ret = element;
                }
              });
              if(ret){
                return {
                  type: AuthActionTypes.GET_AUTH_SUCCESS,
                  payload: ret
                };
              } else {
                return {
                  type: AuthActionTypes.GET_AUTH_FAIL,
                  payload: "Invalid username or password!"
                };
              }
              
            }),
            catchError((error: any) =>
              // error handler
              of({
                type: AuthActionTypes.GET_AUTH_FAIL,
                payload: error,
              }),
            ),
          );
      })
    ),
  )
}
