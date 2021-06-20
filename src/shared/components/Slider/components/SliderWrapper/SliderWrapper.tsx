import { FC } from 'react';

import { Wrapper } from './style';
import { SliderWrapperProps } from './types';

const SliderWrapper: FC<SliderWrapperProps> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
export default SliderWrapper;
