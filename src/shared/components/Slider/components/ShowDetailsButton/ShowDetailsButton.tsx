import { FC } from 'react';

import IconArrowDown from 'shared/components/Icons/IconArrowDown';
import { Btn } from './style';
import { BtnProps } from './types';

const ShowDetailsButton: FC<BtnProps> = ({ onClick }) => (
  <Btn onClick={onClick}>
    <span>
      <IconArrowDown />
    </span>
  </Btn>
);

export default ShowDetailsButton;
