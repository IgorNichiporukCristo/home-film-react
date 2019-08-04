import { ADD_FILMS, ADD_DESCRIPTION_FILM, BROADCAST_ID  } from "../constants";

const API_KEY = "ac122731994c8a0edef1603c3016ac82";
const disciverUrl = (sort) => `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sort}.desc&include_adult=false&include_video=false&page=1`;
const createFilmURL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,images`;

const fetchFilms = (sort) => (dispatch) => {
  const list = disciverUrl(sort);
  fetch(list)
  .then(res => res.json())
  .then(({ results }) => dispatch({ 
      type: ADD_FILMS,
      movies: results
    }))
  .catch(error => error);
};

const getDescriptionFilm = (id) => (dispatch) => {
  const url = createFilmURL(id);
  fetch(url)
  .then(res => res.json())
  .then(({ id, genres, videos: { results }, images: { backdrops }, runtime, release_date }) => dispatch({ 
      type: ADD_DESCRIPTION_FILM,
      movie: { id, genres,results, backdrops, runtime, release_date }
    }))
  .catch(error => error);
};

const broadcastId = (id) => ({
  type: BROADCAST_ID,
  payload: id
});

export { fetchFilms, getDescriptionFilm, broadcastId };


