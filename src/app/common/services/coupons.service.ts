import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {AppStore} from '../models/appstore.model';
import {Coupon} from '../models/coupon.model';

const BASE_URL = 'http://localhost:3000/coupons/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class CouponsService {
  coupons: Observable<any>;

  constructor(private http: Http, private store: Store<AppStore>) {
    this.coupons = store.select('coupons');
  }

  loadItems() {
    this.http.get(BASE_URL)
      .map(res => res.json())
      .map(payload => ({ type: 'GET_COUPONS', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  createItem(item: Coupon) {
    console.log('start');
    this.http.post(`${BASE_URL}`, JSON.stringify(item), HEADER)
      .map(res => res.json())
      .map(payload => ({ type: 'CREATE_COUPON', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  updateItem(item: Coupon) {
    //this.http.put(`${BASE_URL}${item.id}`, JSON.stringify(item), HEADER)
      //.subscribe(action => this.store.dispatch({ type: 'UPDATE_ITEM', payload: item }));
  }

}
