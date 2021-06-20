import { useEffect, FC } from 'react';

import { movies } from 'api';

import Link from 'shared/components/Link';
import Page from 'shared/components/Page';
import Input from 'shared/components/Input';

import { TitleLink } from './style';

const Contacts: FC = () => {
  useEffect(() => {
    movies.getItems().then(res => {
      console.log(res);
    });
  }, []);
  return (
    <Page>
      <TitleLink>
        <Link to="/auth">Auth</Link>
      </TitleLink>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        consectetur cumque dignissimos eius eos facilis in laudantium pariatur,
        quibusdam vel? Adipisci aperiam asperiores hic laudantium nobis quam,
        saepe totam voluptate.
      </p>

      <Input
        label="Message"
        type="textarea"
        value="ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur cumque dignissimos eius eos facilis in laudantium pariatur, quibusdam vel? Adipisci aperiam asperiores hic laudantium nobis quam, saepe totam voluptate."
        placeholder="Your long text"
      />

      <Input
        autoFocus
        label="First name"
        name="first_name"
        type="text"
        placeholder="Mike"
      />

      <Input value="Smith" placeholder="Your last name" />

      <Input value="Smith" type="checkbox" />

      <Input
        label="Last name"
        type="select"
        value={2}
        options={[
          {
            value: 1,
            label: 'Apple',
          },
          {
            value: 2,
            label: 'Banana',
          },
        ]}
      />
    </Page>
  );
};

export default Contacts;
