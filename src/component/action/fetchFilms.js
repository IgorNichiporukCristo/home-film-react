import { ADD_FILMS, ADD_DESCRIPTION_FILM  } from "../constants";

const API_KEY = "ac122731994c8a0edef1603c3016ac82";
const PAGE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const createFilmURL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,images`;

const fetchFilms = (dispatch) => {
  fetch(PAGE_URL)
  .then(res => res.json())
  .then(({results}) => dispatch({ 
      type: ADD_FILMS,
      movies: results
    }))
  .catch(error => error);
};

const getDescriptionFilm = (id) => (dispatch) => {
  const url = createFilmURL(id);
  fetch(url)
  .then(res => res.json())
  .then((result) => dispatch({ 
      type: ADD_DESCRIPTION_FILM,
      movie: result
    }))
  .catch(error => error);
};

export { fetchFilms, getDescriptionFilm };


