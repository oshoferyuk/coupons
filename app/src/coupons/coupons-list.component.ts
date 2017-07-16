import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Coupon} from '../common/models/coupon.model';

@Component({
  selector: 'coupons-list',
  template: `
  <button (click)="orderList()">Order Test</button>
  
  <table class="fem-card mdl-card">
  <tr *ngFor="let item of coupons" (click)="selected.emit(item)">    
    <td>{{item.type}}</td><td>{{item.brand}}</td><td>{{item.description}}</td>
    
  </tr>
  </table>
  `
})
export class ItemsList {
  @Input() coupons: Coupon[];
  @Output() order = new EventEmitter();
  orderList(){
    this.order.emit('brand');
  }
}
