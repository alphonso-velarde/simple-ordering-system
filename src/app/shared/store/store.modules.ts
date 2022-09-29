import { NgModule, ModuleWithProviders } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffect } from './effects/auth.effect';
import { InventoryEffect } from './effects/inventory.effect';
import { AuthReducer } from './reducers/auth.reducer';
import { InventoryReducer } from './reducers/inventory.reducer';
import { OrdersReducer } from './reducers/orders.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature('auth', AuthReducer), 
        StoreModule.forFeature('inventory', InventoryReducer), 
        StoreModule.forFeature('orders', OrdersReducer), 
        EffectsModule.forFeature([
            AuthEffect,
            InventoryEffect
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