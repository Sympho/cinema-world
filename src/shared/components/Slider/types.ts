import { ReactNode } from 'react';

export type MovieType = {
  id: number;
  title: string;
  imageBg: string;
  isComplete: boolean;
  link: string;
};

export type SliderProps = {
  children: ReactNode;
  activeSlide: MovieType | null;
};
