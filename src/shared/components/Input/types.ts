import { ChangeEvent } from 'react';

type InputValue = boolean | number | string;

type InputOptions = {
  value: InputValue;
  label: number | string;
};

type InputByTypes =
  | {
      type: 'select' | 'radio';
      value?: InputValue;
    }
  | {
      type: 'select';
      multiple: true;
      value?: InputValue[];
    }
  | {
      type?: string;
      value?: InputValue;
    };

type InputValidate = {
  isRequired?: boolean;
};

export type InputProps = InputByTypes & {
  autoFocus?: boolean;
  label?: string;
  name?: string;
  id?: string;
  options?: InputOptions[];
  value?: string | number;
  placeholder?: string;
  validate?: InputValidate;
  onChange?: (
    value: any,
    event: ChangeEvent,
    name?: string | undefined,
  ) => void;
};
