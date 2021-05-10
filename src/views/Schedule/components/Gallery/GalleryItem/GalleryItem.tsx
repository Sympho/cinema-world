import { FC } from 'react';

import { Wrapper } from './styled';
import { GalleryItemProps } from './types';

const GalleryItem: FC<GalleryItemProps> = () => {
  return (
    <Wrapper>
      <span>GalleryItem</span>
      <span>GalleryItem</span>
      <span>GalleryItem</span>
      <span>GalleryItem</span>
      <span>GalleryItem</span>
      <span>GalleryItem</span>
      <span>GalleryItem</span>
      <span>GalleryItem</span>
    </Wrapper>
  );
};

export default GalleryItem;
