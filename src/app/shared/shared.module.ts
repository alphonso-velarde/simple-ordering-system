import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './services/local-storage.service';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from './material-component/material-components.module';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialComponentsModule
  ],
  providers: [LocalStorageService],
  declarations: [
    NavComponent
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MaterialComponentsModule,
    NavComponent
  ],
})
export class SharedModule {}
