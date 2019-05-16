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
      return Object.assign({}, state, {
       movies: state.movies[state.movies.findIndex((obj=> obj(state.movies.id)==550))].overview=state.movie.overview
      });
          //  
          // objectId=state.movies.findIndex((obj=> obj(id)==550))
          // state.movies[objectId].video=movie.video
          // state.movies[objectId].overview=movie.overview
    default:
      return state;
  }
};

export default filmReducer;
