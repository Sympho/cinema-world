import React, { FC } from 'react';

import { IconCross } from 'shared/components/Icons';
import {
  ContentWrapper,
  ContentBackground,
  ContentBackgroundShadow,
  ContentBackgroundImage,
  ContentArea,
  ContentAreaContainer,
  ContentTitle,
  ContentDescription,
  CloseContentButton,
} from './style';
import { ContentProps } from './types';

const Content: FC<ContentProps> = ({ movie, onClose }) => (
  <ContentWrapper>
    <ContentBackground>
      <ContentBackgroundShadow />
      <ContentBackgroundImage
        // @ts-ignore
        style={{ 'background-image': `url(${movie.imageBg})` }}
      />
    </ContentBackground>
    <ContentArea>
      <ContentAreaContainer>
        <ContentTitle>{movie.title}</ContentTitle>
        <ContentDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus
          eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim
          quis quam congue, non fringilla orci placerat. Praesent sollicitudin
        </ContentDescription>
      </ContentAreaContainer>
      <CloseContentButton onClick={onClose}>
        <IconCross />
      </CloseContentButton>
    </ContentArea>
  </ContentWrapper>
);

export default Content;
