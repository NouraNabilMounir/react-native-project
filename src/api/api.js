/* eslint-disable prettier/prettier */
import axios from 'axios';

const instance = axios.create({
  baseURL: 'YOUR_BACKEND_API_URL',
});

export default instance;
