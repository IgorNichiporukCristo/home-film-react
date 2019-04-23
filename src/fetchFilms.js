import  ADD_FILMS  from "./constants";

const API_URL = "https://api.themoviedb.org/3/movie/550?api_key=ac122731994c8a0edef1603c3016ac82";

const fetchFilms = (dispatch) => {
  fetch(API_URL)
  .then(res => res.json())
  .then((result) => dispatch({ 
      type: ADD_FILMS,
      movie: result 
    }))
  .catch(error => error);
};

const getSomething = () => {

};

export { fetchFilms, getSomething };


