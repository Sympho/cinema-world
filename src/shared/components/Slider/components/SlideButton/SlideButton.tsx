import { FC } from 'react';

import IconArrowDown from 'shared/components/Icons/IconArrowDown';
import { SlideBtn } from './styled';
import { SlideButtonProps } from './types';

const SlideButton: FC<SlideButtonProps> = ({ onClick, type }) => (
  <SlideBtn type={type} onClick={onClick}>
    <span>
      <IconArrowDown />
    </span>
  </SlideBtn>
);

export default SlideButton;
