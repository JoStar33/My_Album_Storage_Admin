import axios from 'axios';
import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;

const client_id = import.meta.env.VITE_REACT_APP_CLIENT_ID;
const client_secret = import.meta.env.VITE_REACT_APP_CLIENT_SECRET;
const auth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const tokenAxios = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_TOKEN_URL, // 기본 서버 주소 입력
  timeout: JSON.parse(import.meta.env.VITE_REACT_APP_AXIOS_TIMEOUT as string),
  headers: {
    Authorization: 'Basic ' + auth,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export { tokenAxios }; 