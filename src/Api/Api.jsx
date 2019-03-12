const API_KEY = ac122731994c8a0edef1603c3016ac82;
const API_FILM_ID = 550;

export const Api = async () => {
 const api_link = await 
 fetch (`https://api.themoviedb.org/3/movie/${API_FILM_ID}?api_key=${API_KEY}`);
 result = await api_link.json();
}


