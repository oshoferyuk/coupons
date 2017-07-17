import {couponsFilter} from './couponsFilter.store';

describe('`couponsFilter` store', () => {
  it('returns null by default', () => {
    let defaultState = couponsFilter(undefined, {type: 'random', payload: {}});

    expect(defaultState).toBeNull();
  });

  it('`SELECT_ITEM` returns the provided payload', () => {
    let selectItem = couponsFilter(undefined, {type: 'SELECT_ITEM', payload: 'payload'});

    expect(selectItem).toBe('payload');
  });
});
