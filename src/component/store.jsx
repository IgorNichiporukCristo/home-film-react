/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import filmReducer from './reducers/addFilms';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(filmReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
/* eslint-enable */
