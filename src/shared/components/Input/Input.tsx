import { FC, ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  StyleFieldset,
  StyleInputBox,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledSelect,
} from './styled';

import { InputProps } from './types';

const Input: FC<InputProps> = ({
  autoFocus = false,
  label,
  type = 'text',
  name,
  id: outerId,
  placeholder,
  options = [],
  value,
  onChange = () => {},
  validate,
}) => {
  const id = outerId || uuidv4();

  const changeHandle = (event: ChangeEvent) => {
    const newValue = (event.target as HTMLInputElement).value;
    onChange(newValue, event, name);
  };

  const commonProps = {
    id: id,
    autoFocus,
    placeholder,
    name,
    defaultValue: value,
    spellCheck: false,
    onChange: changeHandle,
  };

  return (
    <StyleFieldset>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <StyleInputBox>
        {type === 'text' && <StyledInput {...commonProps} />}

        {type === 'email' && <StyledInput type="email" {...commonProps} />}

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
      </StyleInputBox>
    </StyleFieldset>
  );
};

export default Input;
