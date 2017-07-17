import {Coupon} from './coupon.model';


export interface AppStore {
  coupons: Coupon[];
  couponsFilter: any;
};
