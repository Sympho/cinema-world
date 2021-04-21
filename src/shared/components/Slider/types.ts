import { ReactNode } from 'react';
import { MovieType } from 'store/types';

export type SliderProps = {
  children: ReactNode;
  activeSlide?: MovieType | null;
};
