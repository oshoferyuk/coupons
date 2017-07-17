import { Routes, RouterModule } from '@angular/router';

import { Coupons } from './coupons/coupons.component';
import { EditCoupon } from './editcoupon/coupon-edit.component';


const APP_ROUTES: Routes = [
    {path: '',            component: Coupons },
    {path: 'coupons',     component: Coupons},
    {path: 'new',         component: EditCoupon},
    {path: '*',           component: Coupons }

];

export const routing = RouterModule.forRoot(APP_ROUTES);