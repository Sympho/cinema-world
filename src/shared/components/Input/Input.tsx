import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  StyleFieldset,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledSelect,
} from './styled';

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

type InputProps = InputByTypes & {
  autoFocus?: boolean;
  label?: string;
  name?: string;
  id?: string;
  options?: InputOptions[];
  value?: string | number;
  placeholder?: string;
};

const Input: FC<InputProps> = ({
  autoFocus = false,
  label,
  type = 'text',
  name,
  id: outerId,
  placeholder,
  options = [],
  value,
}) => {
  const id = outerId || uuidv4();

  const commonProps = {
    id: id,
    autoFocus,
    placeholder,
    name,
    defaultValue: value,
    spellCheck: false,
  };

  return (
    <StyleFieldset>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}

      {type === 'text' && <StyledInput {...commonProps} />}

      {type === 'textarea' && <StyledTextarea {...commonProps} />}

      {type === 'select' && (
        <StyledSelect {...commonProps}>
          {value === undefined && <option hidden>Select...</option>}
          {options.map(({ value, label }) => (
            <option key={String(value)} value={String(value)}>
              {label}
            </option>
          ))}
        </StyledSelect>
      )}
    </StyleFieldset>
  );
};

export default Input;
