import { FC } from 'react';
import Header from 'shared/components/Header';
import Footer from 'shared/components/Footer';

const App: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default App;
