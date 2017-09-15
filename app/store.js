import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerMiddleware, routerReducer as routing, push } from 'react-router-redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

import ui from './reducers/ui';
import blockchain from './reducers/blockchain';
import catalog from './reducers/catalog';
import uiActions from './actions/ui';
import blockchainActions from './actions/blockchain';
import catalogActions from './actions/catalog';

export default function configureStore(initialState, routerHistory) {
  const router = routerMiddleware(routerHistory);
  const actionCreators = {
    ...blockchainActions,
    ...catalogActions,
    ...uiActions,
    push
  };
  const reducers = {
    blockchain,
    catalog,
    ui,
    routing
  };

  const middlewares = [ thunk, router ];

  const composeEnhancers = (() => {
    const compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if(process.env.NODE_ENV === 'development' && compose_) {
      return compose_({ actionCreators });
    }
    return compose;
  })();

  const enhancer = composeEnhancers(applyMiddleware(...middlewares), persistState());
  const rootReducer = combineReducers(reducers);

  return createStore(rootReducer, initialState, enhancer);
}
