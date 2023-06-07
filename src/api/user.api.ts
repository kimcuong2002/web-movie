import { PostType } from './../models/post.type';
import { MovieType } from '../models/movie.type';
import axios, { AxiosResponse } from 'axios';

export const getPosts = (): Promise<AxiosResponse<PostType[], any>> => {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
};

export const getPostDetail = (
  id: string
): Promise<AxiosResponse<PostType, any>> => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};
