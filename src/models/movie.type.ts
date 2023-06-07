import { CategoryType } from './category.type';
export interface MovieType {
  name: string;
  id?: string;
  description?: string;
  chapter?: string | number;
  category?: Pick<CategoryType, 'id'>;
  image: string | string[];
  country?: string;
  role?: string;
  episode?: number;
  year?: number;
  views?: number;
  className?: string;
  indexMovie?: number;
}
