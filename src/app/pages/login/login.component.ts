import { Component, OnInit, OnDestroy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { StoreState } from 'src/app/shared/store';
import { AuthActionTypes } from 'src/app/shared/store/actions/auth.action';
import { AuthState } from 'src/app/shared/store/reducers/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private auth$: any;
  private req: Subscription = new Subscription;
  private unsubscribe$ = new Subject<void>();

  public loginForm!: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder, 
    private authStore: Store<StoreState>,
    private snackBar: MatSnackBar,
    private route:Router,
    private localStorageService: LocalStorageService,) { } 

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.auth$ = this.authStore.pipe(select(state => state.auth));

    this.req =  this.auth$.subscribe((auth: AuthState) => {
      if(auth.auth){
        if(auth.auth.role === 'customer'){
          this.route.navigate(['/orders']);
          this.localStorageService.isLoggedIn = 'true'
        }
      }

      if(auth.error){
        this.snackBar.open(auth.error, "", {
          duration: 4000,
          panelClass:'danger-snackbar'
        });

        this.authStore.dispatch({
          type: AuthActionTypes.GET_AUTH_FAIL,
          payload: null
        });
      }
    })
  }

  login(){
    if(this.loginForm.valid){
      this.authStore.dispatch({
        type: AuthActionTypes.GET_AUTH,
        payload: this.loginForm.value
      });
    }
  }

  ngOnDestroy(): void {
    this.req.unsubscribe();
  }

}
