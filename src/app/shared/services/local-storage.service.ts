import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';   

@Injectable({providedIn: 'root'})
export class LocalStorageService {
    isLoggedInValue = new BehaviorSubject(this.isLoggedIn);

 set isLoggedIn(value: any) {
   this.isLoggedInValue.next(value); // this will make sure to tell every subscriber about the change.
   localStorage.setItem('isLoggedIn', value);
 }

 get isLoggedIn() {
   return localStorage.getItem('isLoggedIn');
 }
}