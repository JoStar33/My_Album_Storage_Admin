import axios from 'axios';
import { getToken, setToken, removeToken } from '../tokens/token';


const customAxios = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL, // 기본 서버 주소 입력. 얘 어찌된 영문인지 모르겠지만 이렇게 작성해줘야함.
  timeout: JSON.parse(import.meta.env.VITE_REACT_APP_AXIOS_TIMEOUT),
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
customAxios.interceptors.request.use((config: any) => {
  config.headers.Authorization = getToken();
  return config
}); 

customAxios.interceptors.response.use((config) => {
    if(config.headers.authorization) {
      setToken(config.headers.authorization);
    }
    return config
  }, (error) => {
  if(error.message === "Request failed with status code 419") {
    removeToken();
  }
}); 
export { customAxios };