import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'coupons-group',
  template: `
    <div style="margin-top:10px;margin-right:100px;">
      <a (click)="orderCoupons('all')">All Campaigns</a>
      <a href="#" (click)="orderCoupons('upcoming')">Upcoming Campaigns</a>
      <a href="#" (click)="orderCoupons('active')">Active Campaigns</a>
      <a href="#" (click)="orderCoupons('expired')">Expired Campaigns</a>
    </div>
    <button>Filter</button>
    <input type="text">
  `
})
export class CouponsGroup {
  @Output('order') order = new EventEmitter();

  orderCoupons(groupType: string){
    this.order.emit(groupType);
  }
}
