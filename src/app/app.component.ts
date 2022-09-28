import { Component, OnInit } from '@angular/core';import { LocalStorageService } from './shared/services/local-storage.service';
;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  
  public isLoggedIn:boolean = false;

  constructor(
    private localStorageService : LocalStorageService
  ){}

  ngOnInit(): void {
    this.localStorageService.isLoggedInValue.subscribe((val) => {
     this.isLoggedIn = val ? true : false;
   })
  }

  getisLoggedIn(){
    return localStorage.getItem('isLoggedIn')
  }
}
