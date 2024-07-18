import axios from 'axios';
import { config, server } from './config';

let data = null;

export const fetchData = async () => {
  try {
    const response = await axios.get(`${server}/upload/files`, config);
    data = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

export const getData = () => data;
