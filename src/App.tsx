import { FC } from 'react';

import Header from 'shared/components/Header';
import Footer from 'shared/components/Footer';
import { AppWrapper, Content } from './StyledApp';

const App: FC = ({ children }) => {
  return (
    <AppWrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </AppWrapper>
  );
};

export default App;
