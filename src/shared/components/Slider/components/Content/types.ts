import { MovieType } from '../../types';

export type ContentProps = {
  movie: MovieType;
  onClose: () => void;
};
