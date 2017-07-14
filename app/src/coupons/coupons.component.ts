import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from '@ngrx/store';
import {ItemsService} from '../common/services/coupons.service.ts';
import {AppStore} from '../common/models/appstore.model';
import {Coupon} from '../common/models/coupon.model';
import {ItemsList} from './coupons-list.component';
import {ItemDetail} from './item-detail.component';

@Component({
  selector: 'coupons',
  template: require('./coupons.component.html'),
  //styleUrls: [require('./coupons.component.css')],
  providers: [ItemsService],
  directives: [ItemsList, ItemDetail]
})
export class Coupons {
  coupons: Observable<Array<Coupon>>;
  selectedItem: Observable<any>;

  constructor(private itemsService: ItemsService,
              private store: Store<AppStore>) {
    this.coupons = itemsService.coupons;
    this.selectedItem = store.select('selectedItem');
    this.selectedItem.subscribe(v => console.log(v));

    itemsService.loadItems();
  }

  resetItem() {
    let emptyItem: Coupon = {id: null, name: '', description: ''};
    this.store.dispatch({type: 'SELECT_ITEM', payload: emptyItem});
  }

  selectItem(item: Coupon) {
    this.store.dispatch({type: 'SELECT_ITEM', payload: item});
  }

  saveItem(item: Coupon) {
    this.itemsService.saveItem(item);

    // Generally, we would want to wait for the result of `itemsService.saveItem`
    // before resetting the current item.
    this.resetItem();
  }

  deleteItem(item: Coupon) {
    this.itemsService.deleteItem(item);

    // Generally, we would want to wait for the result of `itemsService.deleteItem`
    // before resetting the current item.
    this.resetItem();
  }
}
