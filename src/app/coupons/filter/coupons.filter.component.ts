import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'coupons-filter',
  template: `
    <div>
      <a (click)="filterCoupons('all')">All Campaigns</a>
      <a href="#" (click)="filterCoupons('upcoming')">Upcoming Campaigns</a>
      <a href="#" (click)="filterCoupons('active')">Active Campaigns</a>
      <a href="#" (click)="filterCoupons('expired')">Expired Campaigns</a>
    </div>
    <button>Filter</button>
    <input type="text">
  `
})
export class CouponsFilter {
  @Output('filter') filter = new EventEmitter();

  filterCoupons(groupType: string){
    this.filter.emit(groupType);
  }
}
