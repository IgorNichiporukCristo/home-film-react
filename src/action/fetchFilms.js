import { ADD_POPULAR_FILMS, ADD_TOPRATED_FILMS, ADD_UPCOMING_FILMS, ADD_DESCRIPTION_FILM, BROADCAST_ID, ADD_SEARCH_FILMS  } from "../constants";

const API_KEY = "ac122731994c8a0edef1603c3016ac82";
const discoverUrl = (filter, page) => `https://api.themoviedb.org/3/movie/${filter}?api_key=${API_KEY}&language=en-US&page=${page}`;
const createFilmURL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,images`;
const searchFilm = (name) => `https://api.themoviedb.org/3/search/keyword?api_key=${API_KEY}&page=1&query=${name}`;

const fetchFilms = (filter, page) => (dispatch) => {
  const list = discoverUrl(filter, page);
  fetch(list)
  .then(res => res.json())
  .then(({ results }) => {
    if(filter == "popular"){
    dispatch({ 
      type: ADD_POPULAR_FILMS,
      popular: results
    });
    }else if(filter == "top_rated"){
      dispatch({ 
        type: ADD_TOPRATED_FILMS,
        top_rated: results
      });
      } else if(filter == "upcoming"){
        dispatch({ 
          type: ADD_UPCOMING_FILMS,
          upcoming: results
        });
        }
  })
  .catch(error => error);
};

const getDescriptionFilm = (id, filter) => (dispatch) => {
  const url = createFilmURL(id);
  fetch(url)
  .then(res => res.json())
  .then(({ id, genres, videos: { results }, images: { backdrops }, runtime, release_date, overview }) => dispatch({ 
      type: ADD_DESCRIPTION_FILM,
      payload: { id, genres, results, backdrops, runtime, release_date, filter, overview }
    }))
  .catch(error => error);
};

const fetchSearchFilm = (name) => (dispatch) => {
  const url = searchFilm(name);
  fetch(url)
  .then(res=>res.json())
  .then(({ results }) => dispatch({
    type: ADD_SEARCH_FILMS,
    payload: results 
  }))
  .catch(error => error);
};

const broadcastId = (id, filter) => ({
  type: BROADCAST_ID,
  payload: { id, filter }
});

export { fetchFilms, getDescriptionFilm, broadcastId,fetchSearchFilm };


