import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/rx';

import {Store} from '@ngrx/store';
import {CouponsService} from '../common/services/coupons.service.ts';
import {AppStore} from '../common/models/appstore.model';
//import {Coupon} from '../common/models/coupon.model';
import {ItemsList} from './coupons-list.component';


@Component({
  selector: 'coupons',
  template: require('./coupons.component.html'),
  //styleUrls: [require('./coupons.component.css')],
  providers: [CouponsService],
  directives: [ItemsList]
})
export class Coupons {
  coupons$: Observable<any>;
  couponsFilter$: Observable<any>;

  constructor(private couponsService: CouponsService,
              private store: Store<AppStore>) {
    //this.coupons$ = couponsService.coupons;
    this.coupons$ = store.select('coupons');
    this.couponsFilter$ = store.select('couponsFilter');
     var res$ = Observable.combineLatest(this.coupons$, this.couponsFilter$, (c,cF) => {
       return 'c + cF';
     });
    res$.subscribe((x)=>{console.log(x)});

    couponsService.loadItems();
  }


  setFilter() {
    this.store.dispatch({type: 'SET_FILTER', payload: {"audio":[], "category":[], "brands":["Codi", "Bouty"], "campaign_status":[]}});
  }

  orderCoupons($event){
    this.store.dispatch({type: 'ORDER_COUPONS', payload: $event});
  }

}
