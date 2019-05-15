import { ADD_FILMS, ADD_DESCRIPTION_FILM } from '../constants';

const initialState = {
  loading: false,
  error: false,
  movies: [],
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILMS:
      return {
        ...state,
        movies: [
          ...action.movies,
        ]
      };
    case ADD_DESCRIPTION_FILM:
      return {
        movie:[
          
        ]
      }; 
    default:
      return state;
  }
};

export default filmReducer;
