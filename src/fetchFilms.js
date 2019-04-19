import { ADD_FILMS } from "./constants";

const API_URL = "https://api.themoviedb.org/3/movie/550?api_key=ac122731994c8a0edef1603c3016ac82";

const fetchFilms = () => {
  fetch(API_URL)
  .then(res => res.json())
  .then((result) => ({ 
      type: ADD_FILMS,
      payload: result
    }))
  .catch(error => error);
};

export { fetchFilms as default };


