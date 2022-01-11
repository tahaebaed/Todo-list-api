import axios from 'axios';
const baseURL = 'https://api-nodejs-todolist.herokuapp.com';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  req => {
    switch (req.url) {
      case '/user/me':
        req.headers.common.Authorization = `Bearer ${localStorage.token}`;
        break;
      case '/user/logout':
        req.headers.common.Authorization = `Bearer ${localStorage.token}`;
        break;
      case '/task':
        req.headers.common.Authorization = `Bearer ${localStorage.token}`;
        break;
      case '/task?limit=2&skip=10':
        req.headers.common.Authorization = `Bearer ${localStorage.token}`;
        break;
      default:
        break;
    }
    return req;
  },
  function (error) {
    // Do something with request error

    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  function (res) {
    console.log(res);
    switch (res.config.url) {
      case '/user/register':
        localStorage.setItem('token', res.data.token);
        return res;
      case '/user/login':
        localStorage.setItem('token', res.data.token);
        return res;
      case '/user/logout':
        return localStorage.removeItem('token');
      case '/user' && res.config.method === 'get':
        return res.data;
      default:
        return res;
    }
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
export default axiosInstance;
