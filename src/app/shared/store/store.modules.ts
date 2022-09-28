import { NgModule, ModuleWithProviders } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffect } from './effects/auth.effect';
import { AuthReducer } from './reducers/auth.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature('auth', AuthReducer), 
        EffectsModule.forFeature([
            AuthEffect,
        ])
    ],
    providers: [
        // services/injectables
    ]
})

export class StorePublicModule {
    public static forRoot(): ModuleWithProviders<StorePublicModule> {
        return {
            ngModule: StorePublicModule,
            providers: [
                //services/injectables
            ]
        }
    }
}