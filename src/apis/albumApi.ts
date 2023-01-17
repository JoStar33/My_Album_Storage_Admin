import { customAxios } from "./axios/customAxios";
import { spotifyAxios } from './axios/spotifyAxios';

const getSpotifyAlbum = (query: string, type:string) => {
  return spotifyAxios.get(`/v1/search`, {
    params: {
      q: query,
      type: type,
    },
    headers: {
      Authorization: `Bearer ${ sessionStorage.getItem('Spotify-Authorization') }`
    }
  });
};

export { getSpotifyAlbum }; 