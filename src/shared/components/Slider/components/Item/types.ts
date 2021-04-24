import { MovieType } from 'store/types';

export type ItemProps = {
  movie: MovieType;
};

export type WrapperProps = {
  isActive?: boolean | null;
};
