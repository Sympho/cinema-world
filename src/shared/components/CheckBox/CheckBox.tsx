import { FC } from 'react';
import { Checkbox as DefaultCheckbox } from '@material-ui/core';

import { CheckBoxType } from './types';

const Checkbox: FC<CheckBoxType> = ({ checked, handleChange }) => {
  return <DefaultCheckbox checked={checked} onChange={handleChange} />;
};

export default Checkbox;
