import axios from 'axios';

const spotifyAxios = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_SPOTIFY_API_URL,
  timeout: JSON.parse(import.meta.env.VITE_REACT_APP_AXIOS_TIMEOUT as string),
});

export { spotifyAxios }; 