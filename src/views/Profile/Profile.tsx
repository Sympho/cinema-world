import { FC } from 'react';

import Page from 'shared/components/Page';
import { Container, LeftSide, RightSide } from './style';

const Profile: FC = () => {
  return (
    <Page>
      <h1>Profile</h1>
      <Container>
        <LeftSide>
          <h2>Left Content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            consequuntur corporis cum cupiditate eos error impedit inventore
            labore neque obcaecati odio, parity provident qui rerum sapiente sit
            tempora veniam voluptates.
          </p>
        </LeftSide>
        <RightSide>
          <h2>Right Content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            consequuntur corporis cum cupiditate eos error impedit inventore
            labore neque obcaecati odio, parity provident qui rerum sapiente sit
            tempora veniam voluptates.
          </p>
        </RightSide>
      </Container>
    </Page>
  );
};

export default Profile;
