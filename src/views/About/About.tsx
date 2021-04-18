import { useEffect, FC } from 'react';

import { service } from 'service';

import Page from 'shared/components/Page';

const About: FC = () => {
  useEffect(() => {
    service.get('/').then(res => {
      console.log('res', res);
    });
  }, []);

  return <Page>About</Page>;
};

export default About;
