import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

import 'core-js';
import 'zone.js/dist/zone';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreLogMonitorModule, useLogMonitor} from '@ngrx/store-log-monitor';
import {coupons} from './common/stores/coupons.store';
import {couponsFilter} from './common/stores/couponsFilter.store';



import { routing } from './app.routing';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {Coupons} from './coupons/coupons.component';
import {EditCoupon} from './editcoupon/coupon-edit.component';
//import {NgxPaginationModule} from 'ngx-pagination';

import {CouponsList} from './coupons/list/coupons.list.component';
import { CouponsHeader } from './coupons/header/coupons.header.component';
import { CouponsFilter } from './coupons/filter/coupons.filter.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    //NgxPaginationModule,
    routing,
    StoreModule.provideStore({coupons, couponsFilter}),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: false,
        position: 'right'
      })
    }),
    StoreLogMonitorModule
  ],
  declarations: [
    AppComponent,
    Coupons,
    EditCoupon,
    CouponsList,
    CouponsHeader,
    CouponsFilter
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
