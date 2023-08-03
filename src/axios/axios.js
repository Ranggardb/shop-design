import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;
const headerToken = import.meta.env.VITE_HEADER_TOKEN;
const headerAuth = import.meta.env.VITE_HEADER_AUTH;

const instance = axios.create({
  baseURL: baseUrl,
});

instance.defaults.headers.common['token'] = headerToken;
instance.defaults.headers.common['Authorization'] = headerAuth;
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
