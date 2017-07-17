import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Coupon} from '../../common/models/coupon.model';

@Component({
  selector: 'coupons-header',
  template: `    
    <div style="margin-top:10px;margin-right:100px;">
    <b>P&C</b> Coupon Campaigns <button (click)="createNewCoupon()" style="float:right">+Create Campaign</button>
    </div>
  `
})
export class CouponsHeader {
  @Output('new') createnew = new EventEmitter();
  createNewCoupon(){
    this.createnew.emit();
  }
}
