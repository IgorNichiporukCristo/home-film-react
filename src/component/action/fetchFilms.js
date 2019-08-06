import { ADD_POPULAR_FILMS, ADD_TOPRATED_FILMS, ADD_UPCOMING_FILMS, ADD_DESCRIPTION_FILM, BROADCAST_ID  } from "../constants";

const API_KEY = "ac122731994c8a0edef1603c3016ac82";
const discoverUrl = (filter) => `https://api.themoviedb.org/3/movie/${filter}?api_key=${API_KEY}&language=en-US&page=1`;
const createFilmURL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,images`;

const fetchFilms = (filter) => (dispatch) => {
  const list = discoverUrl(filter);
  fetch(list)
  .then(res => res.json())
  .then(({ results }) => {
    if(filter == "popular"){
    dispatch({ 
      type: ADD_POPULAR_FILMS,
      movies: results
    });
    }else if(filter == "top_rated"){
      dispatch({ 
        type: ADD_TOPRATED_FILMS,
        toprated: results
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


