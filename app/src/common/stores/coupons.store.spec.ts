import {coupons} from './coupons.store';

describe('`coupons` store', () => {
  let initialState = [
    { id: 0, name: 'First Coupon' },
    { id: 1, name: 'Second Coupon' }
  ];

  it('returns an empty array by default', () => {
    let defaultState = coupons(undefined, {type: 'random', payload: {}});

    expect(defaultState).toEqual([]);
  });

  it('`ADD_COUPONS`', () => {
    let payload = initialState,
      stateItems = coupons([], {type: 'ADD_ITEMS', payload: payload});

    expect(stateItems).toEqual(payload);
  });

  it('`CREATE_COUPON`', () => {
    let payload = {id: 2, name: 'added item'},
      result = [...initialState, payload],
      stateItems = coupons(initialState, {type: 'CREATE_ITEM', payload: payload});

    expect(stateItems).toEqual(result);
  });
  
});
