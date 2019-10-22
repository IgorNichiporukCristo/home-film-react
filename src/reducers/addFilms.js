import { ADD_POPULAR_FILMS, ADD_TOPRATED_FILMS, ADD_UPCOMING_FILMS, ADD_SEARCH_FILMS, ADD_DESCRIPTION_FILM,  BROADCAST_ID  } from '../constants';

const initialState = {
  loading: false,
  error: false,
  popular: [],
  top_rated: [],
  upcoming: [],
  search: [],
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POPULAR_FILMS:
      return {
        ...state,
        popular: state.popular.concat(action.popular)
      };
    case ADD_TOPRATED_FILMS:
      return {
        ...state,
        top_rated: state.top_rated.concat(action.top_rated)
      };
    case ADD_UPCOMING_FILMS:
      return {
        ...state,
        upcoming: state.upcoming.concat(action.upcoming)
      };
    case ADD_SEARCH_FILMS:  
      return {
        ...state,
        search: action.payload
      };
              
    case ADD_DESCRIPTION_FILM:
      return {
        ...state,
        [action.payload.filter]: ((action.payload.filter == 'popular')? state.popular 
          : (action.payload.filter == 'upcoming')? state.upcoming 
            : (action.payload.filter == 'top_rated') ? state.top_rated 
            : state.search).map(obj => obj.id === action.payload.id ?
              { ...obj, 
                genres: action.payload.genres,
                video: action.payload.results,
                poster: action.payload.backdrops[0].file_path,
                time: action.payload.runtime,
              } : 
            obj),
            currentFilm: ((action.payload.filter == 'popular')? state.popular[0] 
            : (action.payload.filter == 'upcoming')? state.upcoming[0] 
              : (action.payload.filter == 'top_rated') ? state.top_rated[0] 
              : state.popular[0])
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