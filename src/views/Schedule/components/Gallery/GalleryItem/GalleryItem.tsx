import { FC } from 'react';

import {
  Wrapper,
  RightSection,
  Title,
  RightContent,
  Day,
  Technology,
  Time,
  RightSubContent,
  TechnologyContainer,
  TimeContainer,
  Img,
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
      <Img>{img}</Img>
      <RightSection>
        <Title>{title}</Title>
        <RightContent>
          <Day>{day}</Day>
          <RightSubContent>
            <TechnologyContainer>
              {technology.map(technologyItem => (
                <Technology key={technologyItem}>{technologyItem}</Technology>
              ))}
            </TechnologyContainer>
            <TimeContainer>
              {visibleTime.map(time => (
                <Time key={time}>{time}</Time>
              ))}
            </TimeContainer>
          </RightSubContent>
        </RightContent>
      </RightSection>
    </Wrapper>
  );
};

export default GalleryItem;
