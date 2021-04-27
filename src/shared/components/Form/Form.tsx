import { FC, SyntheticEvent } from 'react';

type Props = {
  onSubmit: (event: SyntheticEvent, formData: FormData) => void;
};

const Form: FC<Props> = ({ children, onSubmit }) => {
  const submit = (event: SyntheticEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);

    onSubmit(event, formData);
  };

  return (
    <form onSubmit={submit} action="/">
      {children}
    </form>
  );
};

export default Form;
