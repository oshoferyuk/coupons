import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Coupon} from '../common/models/coupon.model';
import {AppStore} from '../common/models/appstore.model';
import {CouponsService} from '../common/services/coupons.service';
import {Store} from '@ngrx/store';

@Component({
  selector: 'coupon-edit',
  template: `
  <button (click)="createNew()">Create New</button>
  `,
  providers: [CouponsService]
})
export class EditCoupon {
  @Input() coupons: Coupon[];
  @Output() order = new EventEmitter();
  constructor(private couponsService: CouponsService,
              private store: Store<AppStore>) {}
  createNew(){
    let coupon = {
      "id":Math.floor(Math.random()*100),
      "image": "new ima",
      "offerID": "PG100001199",
      "type": "PrintNEW",
      "brand": "CrestNEW",
      "description": "Bounty Paper TowelsNEW",
      "start_date":"April 20,2018",
      "end_date":"April 30,2018",
      "category":"HouseholdNEW",
      "Activation Limit":"0/359",
      "status":"upcoming"
    };
    this.couponsService.createItem(coupon);
  }
}
