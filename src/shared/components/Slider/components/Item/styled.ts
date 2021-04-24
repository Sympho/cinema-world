import styled from 'styled-components';

import { WrapperProps } from './types';

export const Wrapper = styled.div<WrapperProps>`
  flex: 0 0 19.7%;
  transition: transform 300ms ease 100ms;
  margin: 0 2px;
  position: relative;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  vertical-align: top;
`;
