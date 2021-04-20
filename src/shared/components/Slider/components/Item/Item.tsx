import { FC } from 'react';

import SliderContext from 'shared/contexts/slider';
import ShowDetailsButton from '../ShowDetailsButton';
import Mark from '../Mark';
import { Wrapper, Image } from './styled';
import { MovieType } from '../../types';

const Item: FC<MovieType> = movie => (
  <SliderContext.Consumer>
    {value => {
      const isActive =
        value!.currentSlide && value!.currentSlide.id === movie.id;

      return (
        <Wrapper ref={value!.elementRef} isActive={isActive}>
          <Image src={movie.imageBg} alt="" />
          <ShowDetailsButton onClick={() => value!.onSelectSlide(movie)} />
          {isActive && <Mark />}
        </Wrapper>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;