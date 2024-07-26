import axios from 'axios';

const axioshelper = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',  
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export default axioshelper;
