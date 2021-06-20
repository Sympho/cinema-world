import { FC } from 'react';

import { StyledButton, StyledText, StyledLoader } from './style';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({
  children,
  isLoading,
  isDisabled,
  ...restProps
}) => {
  return (
    <StyledButton
      isLoading={isLoading}
      disabled={isLoading || isDisabled}
      {...restProps}
    >
      <StyledLoader isLoading={isLoading} />
      <StyledText isLoading={isLoading}>{children}</StyledText>
    </StyledButton>
  );
};

export default Button;
