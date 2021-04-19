import styled, { css } from 'styled-components';

import StyledButton from 'shared/components/StyledButton';
import { StyledBtnProps } from './types';

export const SlideBtn = styled(StyledButton)<StyledBtnProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 55px;
  background: rgba(0, 0, 0, 0.5);
  border: 0;
  outline: 0;
  padding: 0;
  margin: 40px 0;
  z-index: 4;

  span {
    width: 25px;
    color: #fff;
    display: block;
    margin: 0 auto;
  }

  ${({ type }) =>
    type === 'next' &&
    css`
      right: 0;

      span {
        transform: rotateZ(-90deg);
      }
    `}

  ${({ type }) =>
    type === 'prev' &&
    css`
      left: 0;

      span {
        transform: rotateZ(90deg);
      }
    `}
`;
