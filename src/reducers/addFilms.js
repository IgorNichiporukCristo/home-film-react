import ADD_FILMS from '../constants';

const initialState = {
  loading: false,
  error: false,
  movie: {id: 1},
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILMS:
      return {
        ...state,
        movie: {
         ...action.movie,
        }
      };
    default:
      return state;
  }
};

export default filmReducer;
