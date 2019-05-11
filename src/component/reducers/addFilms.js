import ADD_FILMS from '../constants';

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
    default:
      return state;
  }
};

export default filmReducer;
