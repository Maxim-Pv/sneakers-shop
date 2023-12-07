const initialState = {
  value: 0,
  selectedProducts: 0,
  productName: 'Fall Limited Edition Sneakers',
  price: '125.00',
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
        return {...state, value: state.value + 1};
    case 'DECREASE':
        return {...state, value: Math.max(0, state.value - 1)};
    case 'ADD_TO_CART':
        return {...state, selectedProducts: state.selectedProducts + state.value};
    case 'REMOVE_FROM_CART':
        return {...state, selectedProducts: state.selectedProducts - 1};
    default:
        return state;
  }
}

export const increaseCounter = () => ({
  type: 'INCREASE'
})

export const decreaseCounter = () => ({
  type: 'DECREASE'
})

export const addToCart = (payload) => ({
  type: 'ADD_TO_CART', payload
})

export const removeFromCart = (payload) => ({
  type: 'REMOVE_FROM_CART', payload
})