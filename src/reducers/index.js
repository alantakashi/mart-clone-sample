import { combineReducers } from 'redux'
import ProductReducer from './ProductReducer'
import SelectionReducer from './SelectionReducer'
import AuthReducer from './AuthReducer'
import { CartReducers } from './CartReducers'

export default combineReducers({
  auth: AuthReducer,
  products: ProductReducer,
  selectedProductId: SelectionReducer,
  cart: CartReducers
})
