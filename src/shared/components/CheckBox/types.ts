import { ChangeEvent } from 'react';

export type CheckBoxType = {
  checked: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
