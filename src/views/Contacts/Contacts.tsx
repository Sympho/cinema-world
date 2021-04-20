import { FC } from 'react';

import Page from 'shared/components/Page';
import Input from 'shared/components/Input';

const Contacts: FC = () => {
  return (
    <Page>
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
