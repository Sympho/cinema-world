import { FC } from 'react';

import GalleryItem from './GalleryItem';
import { Wrapper } from './styled';
import { GalleryProps } from './types';

const Gallery: FC<GalleryProps> = () => {
  return (
    <Wrapper>
      <span>Gallery</span>
      <GalleryItem />
    </Wrapper>
  );
};

export default Gallery;
