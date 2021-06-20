import { FC } from 'react';

import GalleryItem from './GalleryItem';

import { mocGalleryData } from './data';
import { Wrapper } from './style';
import { GalleryProps } from './types';

const Gallery: FC<GalleryProps> = () => {
  return (
    <Wrapper>
      {mocGalleryData.map(
        ({ id, title, img, visibleTime, technology, day }) => (
          <ul key={id}>
            <GalleryItem
              title={title}
              img={img}
              visibleTime={visibleTime}
              technology={technology}
              day={day}
            />
          </ul>
        ),
      )}
    </Wrapper>
  );
};

export default Gallery;
