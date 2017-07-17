import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Coupon} from '../../common/models/coupon.model';
declare var require: any;

@Component({
  selector: 'coupons-list',
  template: `    
    <table>
      <tr>
        <th>image</th>
        <th (click)="toggleOrder('offerID')">offerID</th>
        <th (click)="toggleOrder('type')">type</th>
        <th (click)="toggleOrder('brand')">brand</th>
        <th (click)="toggleOrder('description')">description</th>
        <th (click)="toggleOrder('start_date')">Start Date</th>
        <th (click)="toggleOrder('end_date')">End Date</th>
        <th (click)="toggleOrder('category')">Category</th>
        <th>Limit</th><th>status</th>
      </tr>
      <tr *ngFor="let item of coupons" (click)="selected.emit(item)">
        <td>{{item.image}}</td><td>{{item.offerID}}</td><td>{{item.type}}</td><td>{{item.brand}}</td><td>{{item.description}}</td><td>{{item.start_date}}</td><td>{{item.end_date}}</td><td>{{item.category}}</td><td>{{item.limit}}</td><td>{{item.status}}</td>
      </tr>
    </table>
  `
})
export class CouponsList {
  @Output('order') order = new EventEmitter();
  @Input() coupons;
  toggleOrder(orderType){
    this.order.emit(orderType);
  }
}
