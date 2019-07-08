import { ADD_FILMS, ADD_DESCRIPTION_FILM } from '../constants';

const initialState = {
  loading: false,
  error: false,
  movies: [],
  currId: null,
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
      currId: state.currId ? null: state.movies[0].id,
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