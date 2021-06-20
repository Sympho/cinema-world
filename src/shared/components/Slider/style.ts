import styled, { css } from 'styled-components';

import { Btn } from 'shared/components/Slider/components/ShowDetailsButton/style';
import { Wrapper } from 'shared/components/Slider/components/Item/style';

import { ContainerProps } from './types';

export const Container = styled.div<ContainerProps>`
  display: flex;
  position: relative;

  ${({ ifOpenSlider }) =>
    (ifOpenSlider === null || !ifOpenSlider) &&
    css`
      & ${Wrapper}:hover ${Btn} {
        opacity: 1;
      }
      ${Wrapper}:hover {
        transform: scale(1.5) !important;
      }

      :hover ${Wrapper} {
        transform: translateX(-25%);
      }

      ${Wrapper}:hover ~ ${Wrapper} {
        transform: translateX(25%);
      }
    `};
`;

export const SliderContainer = styled.div`
  display: flex;
  padding: 0 55px;
  transition: transform 300ms ease 100ms;
  z-index: 3;
  width: 100%;
`;
