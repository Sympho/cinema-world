import { useState, FC } from 'react';

import { httpClient, createCancel } from 'api';

import Page from 'shared/components/Page';

const About: FC = () => {
  const [cancelSource, setCancelSource] = useState(createCancel());

  const submitRequest = async () => {
    const source = await createCancel();
    setCancelSource(source);

    const { data, ...rest } = await httpClient.get('/', {
      cancelToken: source.token,
    });

    console.log(data, rest);
  };

  const cancelRequest = () => {
    cancelSource.cancel();
  };

  return (
    <Page>
      <p>
        <button onClick={submitRequest}>submit</button>
        <button onClick={cancelRequest}>cancel</button>
      </p>
    </Page>
  );
};

export default About;
