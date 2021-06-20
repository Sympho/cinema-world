import styled, { css, keyframes } from 'styled-components';

import { ButtonProps } from './types';

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  position: relative;
  border: none;
  background: #f3ae0b;
  color: #151515;
  padding: 0 25px;
  border-radius: 3px;
  height: 38px;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;

  :disabled {
    background: #888;
    cursor: default;
    cursor: not-allowed;
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      *,
      :disabled {
        background: #a07f2d;
        cursor: default;
        cursor: wait;
      }
    `}
`;

export const StyledText = styled.span<ButtonProps>`
  display: block;
  transform: translate(0, 0);
  transition: transform 0.2s;

  ${({ isLoading }) =>
    isLoading &&
    css`
      transform: translate(12px, 0px);
    `}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.i<ButtonProps>`
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  font-style: normal;
  background: rgba(255, 255, 255, 1.2);
  left: 12px;
  transform: scale(0);
  opacity: 0;
  transition: all 0.2s;

  ${({ isLoading }) =>
    isLoading &&
    css`
      opacity: 1;
      transform: scale(1);
      animation: ${rotate} 1s linear infinite;
    `}
`;
