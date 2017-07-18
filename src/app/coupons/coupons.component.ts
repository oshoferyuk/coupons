import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from "rxjs/Observable";
//import 'rxjs/rx';
import {Store} from '@ngrx/store';

import {AppStore} from '../common/models/appstore.model';
import {CouponsService} from '../common/services/coupons.service';

@Component({
  selector: 'coupons',
  //templateUrl: './coupons.component.html',
  //styleUrls: [require('./coupons.component.css')],
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css'],
  //template: `
    //<coupons-header (new)="createNewCoupon()"></coupons-header>
    //<coupons-filter (filter)="filterCoupons($event)"></coupons-filter>
    //<coupons-list [coupons]="coupons" (order)="orderCoupons($event)"></coupons-list>
  //`,
  providers: [CouponsService],
  //directives: [CouponsList, CouponsHeader, CouponsFilter]
})
export class Coupons {
  coupons: any[] = []; //Coupon[];
  coupons$: Observable<any>;
  currentOrder = {name:'type', asc: true};
  //couponsFilter$: Observable<any>;

  constructor(private couponsService: CouponsService,
              private store: Store<AppStore>,
              private router: Router) {
    //this.coupons$ = couponsService.coupons;

    this.coupons$ = store.select('coupons');
    //this.couponsFilter$ = store.select('couponsFilter');

    //var res$ = Observable.combineLatest(this.coupons$, this.couponsFilter$, (c,cF) => {
    //return c;
    //});
    this.coupons$.subscribe((res)=>{
      this.coupons = res.filter((item:{hidden:boolean}) => !item.hidden);
    });

    couponsService.loadItems();
  }


  setFilter() {
    this.store.dispatch({type: 'SET_FILTER', payload: {"audio":[], "category":[], "brands":["Codi", "Bouty"], "status":[]}});
  }

  orderCoupons(order:string){
      if(order == this.currentOrder.name){
        this.currentOrder.asc = !this.currentOrder.asc;
      }else{
        this.currentOrder.name = order;
        this.currentOrder.asc = true;
      }

    this.store.dispatch({type: 'ORDER_COUPONS', payload: this.currentOrder});
  }

  filterCoupons(filter: string){
    this.store.dispatch({type: 'FILTER_COUPONS', payload: filter});
  }

  createNewCoupon(){
    this.router.navigate(['new']);
  }

}
