import { BrowserRouter as Router } from 'react-router-dom';

import DashBoard from './modules/dashboard';

function App() {
  return (
    <Router>
      <DashBoard text="Welcome to Cinema World" />
    </Router>
  );
}

export default App;
