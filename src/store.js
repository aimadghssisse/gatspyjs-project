import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk"

import reducers from './state/reducers'
import './state/actions'


// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(reducers, {}, applyMiddleware(thunk));
};
