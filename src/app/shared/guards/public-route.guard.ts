import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // let token = localStorage.getItem('token');
    let isLoggedIn: boolean = localStorage.getItem('isLoggedIn') ? true : false;
    let userData: any = localStorage.getItem('userData')
    userData = JSON.parse(userData)
    if(isLoggedIn){
      if(userData?.role === 'customer'){
        this.router.navigate(['/orders']);
      } else {
        this.router.navigate(['/admin']);
      }
        
        return false;
    } 
    else {
      return true;
    }
  }
}
