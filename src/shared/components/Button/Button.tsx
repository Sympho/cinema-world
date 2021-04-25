import { FC } from 'react';

import { StyledButton, StyledText, StyledLoader } from './styled';

type ButtonProps = {
  isLoading?: boolean;
  isDisabled?: boolean;
};

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
