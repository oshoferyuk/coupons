import 'core-js';
import 'zone.js/dist/zone';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreLogMonitorModule, useLogMonitor} from '@ngrx/store-log-monitor';
import {coupons} from './src/common/stores/coupons.store';
import {couponsFilter} from './src/common/stores/couponsFilter.store';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {App} from './src/app';
import {Coupons} from './src/coupons/coupons.component';
import {EditCoupon} from './src/editcoupon/coupon-edit.component';
import {routes} from './routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore({coupons, couponsFilter}),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: false,
        position: 'right'
      })
    }),
    StoreLogMonitorModule
  ],
  declarations: [App, Coupons, EditCoupon],
  //providers: [GadgetService],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
