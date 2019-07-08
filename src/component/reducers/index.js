import { combineReducers } from 'redux';
import addId from './addId';
import addFilms from './addFilms';

export default combineReducers({
    addId,
    addFilms
});