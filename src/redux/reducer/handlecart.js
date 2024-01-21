const handlecart = (state = [], action) => {
    const product = action.payload;
  
    switch (action.type) {
      case 'ADDITEM':
        const exist = state.find((x) => x.id === product.id);
  
        if (exist) {
          return state.map((x) => ({
            ...x,
            qty: x.id === product.id ? x.qty + 1 : x.qty,
            price: x.id === product.id ? x.price * (x.qty + 1) : x.price,
          }));
        } else {
          return [
            ...state,
            {
              ...product,
              qty: 1,
              price: product.price,
            },
          ];
        }
  
      case 'INCREMENT_ITEM':
        return state.map((item) => ({
          ...item,
          
          qty: item.id === product.id ? item.qty + 1 : item.qty,
          price: item.id === product.id ? item.price  : item.price,
          
        }));
  
        case 'DECREMENT_ITEM':
          return state.map((item) => ({
            ...item,
            qty: item.id === product.id ? Math.max(1, item.qty - 1) : item.qty,
            price: item.id === product.id ? item.price: item.price,
          }));
        
  
      case 'DELITEM':
        return state.filter((item) => item.id !== action.payload.id);
  
      default:
        return state;
    }
  };
  
  export default handlecart;
  