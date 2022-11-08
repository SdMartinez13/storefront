import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './categoryReducer';

let reducers = combineReducers({
  categoryReducer: categoryReducer,
})

export default function store() {
  return createStore(reducers, composeWithDevTools());
}