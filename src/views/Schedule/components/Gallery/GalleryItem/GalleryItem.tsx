import { FC } from 'react';

import { Wrapper } from './styled';
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
      <div>
        <span>{title}</span>
        <span>{day}</span>
        <div>
          {technology.map(technologyItem => (
            <span>{technologyItem}</span>
          ))}
          {visibleTime.map(time => (
            <span>{time}</span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default GalleryItem;
