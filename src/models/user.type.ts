import { MovieType } from './movie.type';

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export type User = {
  name: string;
  id: string;
  age: string | number;
  gender: Gender.FEMALE | Gender.MALE;
  moviesLiked: string[] | Pick<MovieType, 'id'>[] | MovieType[];
  moviesWatched: string[] | Pick<MovieType, 'id'>[] | MovieType[];
};
