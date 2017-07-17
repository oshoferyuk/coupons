export const couponsFilter = (state: any = {order:{name:'type', asc: true}, filter: 'all'}, p: any) => {
  let {type, payload} = p;
  switch (type) {
    case 'FILTER_COUPONS3':
      return Object.assign(state, {}, {'filter':payload});
    case 'ORDER_COUPONS3':
      return payload;
      //return state.order.name === payload ? Object.assign(state, {}, {order:{name: payload, asc: !state.order.asc}}) :
      //                                           Object.assign(state, {}, {order:{name: payload, asc: true}})
      default:
      return state;
  }
};
