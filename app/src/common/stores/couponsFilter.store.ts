export const couponsFilter = (state: any = null, {type, payload}) => {
  switch (type) {
    case 'SET_FILTER':
      return payload;
    default:
      return state;
  }
};
