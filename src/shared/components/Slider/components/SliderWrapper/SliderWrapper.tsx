import { FC } from 'react';

import { Wrapper } from './styled';
import { SliderWrapperProps } from './types';

const SliderWrapper: FC<SliderWrapperProps> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
export default SliderWrapper;
