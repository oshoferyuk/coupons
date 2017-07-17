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
      return [...state.sort(keysrt(payload.name, payload.asc))];
    case 'CREATE_COUPON':
      return [...state,...payload];
    case 'FILTER_COUPONS':
      return state.filter( c => {
        if(c.status == payload || payload == 'all'){
          return Object.assign(c,{},{'hidden':false});
        }else{
          return Object.assign(c,{},{'hidden':true});
        }
      });
    default:
      return state;
  }
};


