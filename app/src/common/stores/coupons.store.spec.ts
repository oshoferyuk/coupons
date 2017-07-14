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

  it('`ADD_ITEMS`', () => {
    let payload = initialState,
      stateItems = coupons([], {type: 'ADD_ITEMS', payload: payload});

    expect(stateItems).toEqual(payload);
  });

  it('`CREATE_ITEM`', () => {
    let payload = {id: 2, name: 'added item'},
      result = [...initialState, payload],
      stateItems = coupons(initialState, {type: 'CREATE_ITEM', payload: payload});

    expect(stateItems).toEqual(result);
  });

  it('`UPDATE_ITEM`', () => {
    let payload = { id: 1, name: 'Updated Coupon' },
      result = [ initialState[0], { id: 1, name: 'Updated Coupon' } ],
      stateItems = coupons(initialState, {type: 'UPDATE_ITEM', payload: payload});

    expect(stateItems).toEqual(result);
  });

  it('`DELETE_ITEM`', () => {
    let payload = { id: 0 },
      result = [ initialState[1] ],
      stateItems = coupons(initialState, {type: 'DELETE_ITEM', payload: payload});

    expect(stateItems).toEqual(result);
  });
});
