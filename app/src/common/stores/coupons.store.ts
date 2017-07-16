function keysrt(key,desc) {
  return function(a,b){
    return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
  }
}

export const coupons = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'GET_COUPONS':
      return payload;
    case 'ORDER_COUPONS':
      return state.sort(keysrt(payload, false));
    case 'CREATE_COUPON':
      return [...state,...payload];
    case 'DELETE_ITEM':
      return state.filter(item => {
        return item.id !== payload.id;
      });
    default:
      return state;
  }
};


