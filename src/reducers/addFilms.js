import ADD_FILMS from '../constants';

const initialState = {
  loading: false,
  error: false,
  movie: [],
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILMS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default filmReducer;
