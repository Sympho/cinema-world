import { createContext, MutableRefObject } from 'react';

import { MovieType } from 'store/types';

type ContextValueType = {
  onSelectSlide: (movie: MovieType) => void;
  onCloseSlide: () => void;
  elementRef: MutableRefObject<HTMLHeadingElement | null>;
  currentSlide: MovieType | null;
};

const SliderContext = createContext<ContextValueType | null>(null);

export default SliderContext;
