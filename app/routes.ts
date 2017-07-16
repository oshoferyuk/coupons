import { Coupons } from './src/coupons/coupons.component';
import { Routes } from '@angular/router';
import { EditCoupon } from './src/editcoupon/coupon-edit.component';

export const routes: Routes = [
  {path: '',            component: Coupons },
  {path: 'coupons',     component: Coupons},
  {path: 'new',         component: EditCoupon},
  {path: '*',           component: Coupons }
];
