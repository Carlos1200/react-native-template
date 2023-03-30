import axios from 'axios';

const baseURL = 'localhost' + '/api/v1/';

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// interceptor for response when status code is 403
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 403) {
    }
    return Promise.reject(error);
  },
);
