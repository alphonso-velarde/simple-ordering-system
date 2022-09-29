import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit, OnDestroy {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    
  }

  cancel(): void {
    this.dialogRef.close(false);
  }

  confirm() {
    this.dialogRef.close(true);
  }

  ngOnDestroy(): void {

  }
}
