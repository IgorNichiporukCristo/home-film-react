import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import FilmReducer from './reducers/addFilms';

export default createStore(FilmReducer, applyMiddleware(thunk));
