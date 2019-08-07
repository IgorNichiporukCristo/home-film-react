import { ADD_POPULAR_FILMS, ADD_DESCRIPTION_FILM,  BROADCAST_ID  } from '../constants';

const initialState = {
  loading: false,
  error: false,
  popular: [],
  currentFilm: null,
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POPULAR_FILMS:
      return {
        ...state,
        popular: [
          ...action.popular,
        ]
      };
    case ADD_DESCRIPTION_FILM:
      return {
        currentFilm: state.popular.id ? null: state.popular[0],
        popular: state.popular.map(obj => obj.id === action.movie.id ?
          { ...obj, 
            genres: action.movie.genres,
            video: action.movie.results,
            poster: action.movie.backdrops[0].file_path,
            time: action.movie.runtime,
            release: action.movie.release_date,
          } : 
         obj)
      };
    case BROADCAST_ID:
      return {
        ...state,
        currentFilm: state.popular.find(obj => obj.id === action.payload)
      };
    default:
      return state;
  }
};

export default filmReducer;