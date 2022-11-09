const initialState = {
  itemsToPurchase: [],
  itemsCount: 0

}

function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      let cart = {
        itemsToPurchase: [...state.itemsToPurchase, payload],
        itemCount: state.itemsCount + 1,

      }
      return cart 

    case 'REMOVE_FROM_CART':
      return {
        itemsToPurchase: {},
      }

    case 'VIEW':
      return {
        itemsToPurchase: {},
      }

    case 'RESET':
      return initialState;

    default:
      return initialState;

  }
}

export const addItemToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  }
}

export const removeItemFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product,
  }
}

export const viewItemsInCart = (product) => {
  return {
    type: 'VIEW',
    payload: product,
  }
}

// export const resetCart = (product) => {
//   return {
//     type: 'RESET',
//     payload: product,
//   }
// }

export default cartReducer;