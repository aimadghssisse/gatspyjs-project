import { combineReducers } from 'redux';
import productsReducer from './productsReducer'
import countReducer from './countReducer'

const reducers = combineReducers({
  products: productsReducer,
  count: countReducer
})

export default reducers;
