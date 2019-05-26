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
    console.log(action.movie); 
    return {
      movies: state.movies.map(obj => obj.id === action.movie.id ?
        { ...obj, 
          genres: action.movie.genres,
          video: action.movie.results
        } : 
        obj)
      };
    default:
      return state;
  }
};

export default filmReducer;