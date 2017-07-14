import { Coupons } from './src/coupons/coupons.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '',            component: Coupons },
  {path: 'coupons',      component: Coupons},
  {path: '*',           component: Coupons }
];
