import { FC } from 'react';

import SliderContext from 'shared/contexts/slider';
import ShowDetailsButton from '../ShowDetailsButton';
import Mark from '../Mark';
import { Wrapper, Image } from './style';
import { ItemProps } from './types';

const Item: FC<ItemProps> = ({ movie }) => (
  <SliderContext.Consumer>
    {value => {
      const isActive =
        value!.currentSlide && value!.currentSlide.id === movie.id;

      return (
        <Wrapper isActive={isActive} ref={value!.elementRef}>
          <Image src={movie.imageBg} alt="" />
          <ShowDetailsButton onClick={() => value!.onSelectSlide(movie)} />
          {isActive && <Mark />}
        </Wrapper>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
