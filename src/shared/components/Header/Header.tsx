import Link from 'shared/components/Link';
import { Container, Wrapper } from './StyledComponents';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/">Home</Link> |<Link to="/dashboard/">Dashboard</Link> |
        <Link to="/profile/">Profile</Link>
      </Container>
    </Wrapper>
  );
};

export default Header;
