import { FC } from 'react';

import {
  Wrapper,
  RightSection,
  Title,
  RightContent,
  Day,
  Technology,
  Time,
} from './styled';
import { GalleryItemProps } from './types';

const GalleryItem: FC<GalleryItemProps> = ({
  title,
  day,
  img,
  visibleTime,
  technology,
}) => {
  return (
    <Wrapper>
      <div>{img}</div>
      <RightSection>
        <Title>{title}</Title>
        <RightContent>
          <Day>{day}</Day>
          {technology.map(technologyItem => (
            <Technology>{technologyItem}</Technology>
          ))}
          {visibleTime.map(time => (
            <Time>{time}</Time>
          ))}
        </RightContent>
      </RightSection>
    </Wrapper>
  );
};

export default GalleryItem;
