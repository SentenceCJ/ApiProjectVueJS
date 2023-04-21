import axios from 'axios';
import { API_KEY, API_URL } from './config';

export const getPopularMovies = () => {
  return axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}`);
};

export const getMovieDetails = (id) => {
  return axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
};
