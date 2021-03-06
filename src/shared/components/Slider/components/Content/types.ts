import { MovieType } from 'store/types';

export type ContentProps = {
  movie: MovieType;
  onClose: () => void;
};
