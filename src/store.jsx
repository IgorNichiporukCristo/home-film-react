import { createStore } from 'redux';
import FilmReducer from './reducers/addFilms';

export default createStore(FilmReducer);
