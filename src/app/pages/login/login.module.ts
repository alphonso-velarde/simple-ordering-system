import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [ 
    CommonModule,
    SharedModule,
    LoginRoutingModule,
  ],
  declarations: [
    LoginComponent
  ],
})
export class LoginModule { }