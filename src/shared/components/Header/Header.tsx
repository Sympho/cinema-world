import { useContext } from 'react';

import Link from 'shared/components/Link';
import { AuthContext } from 'shared/contexts/auth';

import { Container, Wrapper } from './StyledComponents';

const Header = () => {
  const { isAuth, setAuth } = useContext(AuthContext);

  const logout = () => setAuth(false);

  return (
    <Wrapper>
      <Container>
        <Link to="/">Home</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        {isAuth && (
          <ul style={{ display: 'flex', alignItems: 'center' }}>
            <li>
              <Link to="/dashboard/">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile/">Profile</Link>
            </li>
            <li>
              <button onClick={logout}>Log out</button>
            </li>
          </ul>
        )}
      </Container>
    </Wrapper>
  );
};

export default Header;
