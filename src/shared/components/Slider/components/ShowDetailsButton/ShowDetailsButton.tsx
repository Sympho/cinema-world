import { FC } from 'react';

import IconArrowDown from 'shared/components/Icons/IconArrowDown';
import { Btn } from './styled';
import { BtnProps } from './types';

const ShowDetailsButton: FC<BtnProps> = ({ onClick }) => (
  <Btn onClick={onClick} className="show-details-button">
    <span>
      <IconArrowDown />
    </span>
  </Btn>
);

export default ShowDetailsButton;
