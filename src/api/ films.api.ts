import axios, { AxiosResponse } from 'axios';
import { MovieType } from '../models/movie.type';

export const getAllFilm = (): Promise<AxiosResponse<MovieType[], any>> => {
  return axios.get('https://unogsng.p.rapidapi.com/genres');
};
