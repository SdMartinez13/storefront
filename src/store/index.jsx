import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './categoryReducer';
import cartReducer from './cartReducer';

let reducers = combineReducers({
  category: categoryReducer,
  cart: cartReducer,
})

export default function store() {
  return createStore(reducers, composeWithDevTools());
}