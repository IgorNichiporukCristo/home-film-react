import { ADD_POPULAR_FILMS, ADD_TOPRATED_FILMS, ADD_UPCOMING_FILMS, ADD_DESCRIPTION_FILM,  BROADCAST_ID  } from '../constants';

const initialState = {
  loading: false,
  error: false,
  popular: [],
  top_rated: [],
  upcoming: [],
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
    case ADD_TOPRATED_FILMS:
      return {
        ...state,
        top_rated: [
          ...action.top_rated,
        ]
      };
    case ADD_UPCOMING_FILMS:
      return {
        ...state,
        upcoming: [
          ...action.upcoming,
        ]
      };
       
             
    case ADD_DESCRIPTION_FILM:
      return {
        ...state,
        currentFilm: state.popular.id ? null: state.popular[0],
        [action.movie.filter]: ((action.movie.filter == 'popular')? state.popular 
          : (action.movie.filter == 'upcoming')? state.upcoming 
            : (action.movie.filter == 'top_rated') ? state.top_rated 
            : state.popular).map(obj => obj.id === action.movie.id ?
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
        currentFilm: ((action.payload.filter == 'popular')? state.popular 
        : (action.payload.filter == 'upcoming')? state.upcoming 
          : (action.payload.filter == 'top_rated') ? state.top_rated 
          : state.popular).find(obj => obj.id === action.payload.id)
      };
    default:
      return state;
  }
};

export default filmReducer;