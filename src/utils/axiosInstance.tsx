import axios from 'axios';

const axiosDbIntance = axios.create({
  baseURL: 'http://localhost:4000',
});

export default axiosDbIntance;
