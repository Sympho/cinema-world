import { FC } from 'react';

import { IconArrowDown } from 'shared/components/Icons';
import { SlideBtn } from './style';
import { SlideButtonProps } from './types';

const SlideButton: FC<SlideButtonProps> = ({ onClick, type }) => (
  <SlideBtn typeBtn={type} onClick={onClick}>
    <span>
      <IconArrowDown />
    </span>
  </SlideBtn>
);

export default SlideButton;
