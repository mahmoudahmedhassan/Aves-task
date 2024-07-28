import axios from 'axios';
 

// Set up axios instance with base URL and headers
const axioshelper = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',  
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export default axioshelper;
