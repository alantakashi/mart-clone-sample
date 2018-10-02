import axios from 'axios'

export function getCart () {
  return function (dispatch) {
    axios.get('/api/cart').then(function (response) {
      dispatch({type: 'GET_CART', payload: response.data})
    }).catch(err => dispatch({type: 'GET_CART_REJECTED', msg: 'error when retrieving cart'}))
  }
}

// export function addToCart (cart) {
//   return function (dispatch) {
//     axios.post('/api/cart', cart).then(function (response) {
//       dispatch({type: 'ADD_TO_CART', payload: response.data})
//     }).catch(err => {
//       dispatch({type: 'ADD_TO_CART_REJECTED', msg: 'error when getting the cart from session'})
//     })
//   }
// }
export const addToCart = (cart) => {
  return {
    type: 'ADD_TO_CART',
    payload: cart
  }
}

export function updateCart (_id, unit, cart) {
  const currentBookToUpdate = cart
  const indexToUpdate = currentBookToUpdate.findIndex(function (menu) {
    return menu._id === _id
  })

  const newBookToUpdate = {
    ...currentBookToUpdate[indexToUpdate],
    quantity: currentBookToUpdate[indexToUpdate].quantity + unit
  }

  let cartUpdate = [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]

  // return function (dispatch) {
  //   axios.post('/api/cart', cartUpdate).then(function (response) {
  //     dispatch({type: 'UPDATE_CART', payload: response.data})
  //   }).catch(err => {
  //     dispatch({type: 'UPDATE_CART_REJECTED', msg: 'error when adding to the cart'})
  //   })
  // }
  return {
    type: 'UPDATE_CART',
    payload: cartUpdate
  }
}

export function deleteCartItem (cart) {
  return {
    type: 'DELETE_CART_ITEM',
    payload: cart
  }
  // return function (dispatch) {
  //   axios.post('/api/cart', cart).then(function (response) {
  //     dispatch({type: 'DELETE_CART_ITEM', payload: response.data})
  //   }).catch(err => {
  //     dispatch({type: 'DELETE_CART_ITEM_REJECTED', msg: 'error when deleting an item from the cart'})
  //   })
  // }
}
