import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './services/local-storage.service';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from './material-component/material-components.module';
import { NavComponent } from './components/nav/nav.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataTablesModule } from 'angular-datatables';
import { ConfirmationComponent } from './components/dialogs/confirmation/confirmation.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialComponentsModule,
    DataTablesModule
  ],
  providers: [LocalStorageService],
  declarations: [
    NavComponent,
    DataTableComponent,
    ConfirmationComponent
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MaterialComponentsModule,
    NavComponent,
    DataTableComponent
  ],
})
export class SharedModule {}
