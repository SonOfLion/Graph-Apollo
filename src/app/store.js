import { applyMiddleware, createStore, combineReducers, compose  } from "redux";
import createSagaMiddleware from 'redux-saga';
import { linksReducer } from './LinksReducer';
import { watchFetchLink } from './saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(linksReducer, enhancer);

console.log(store.getState())

sagaMiddleware.run(watchFetchLink)

export default store;