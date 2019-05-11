import  ADD_FILMS  from "../constants";

const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=ac122731994c8a0edef1603c3016ac82&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

const fetchFilms = (dispatch) => {
  fetch(API_URL)
  .then(res => res.json())
  .then(({results}) => dispatch({ 
      type: ADD_FILMS,
      movies: results
    }))
  .catch(error => error);
};

const getSomething = () => {

};

export { fetchFilms, getSomething };


