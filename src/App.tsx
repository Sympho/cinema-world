import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import { StyledApp } from './StyledApp';

function App() {
  return (
    <Router>
      <StyledApp>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </StyledApp>
    </Router>

  );
}

export default App;
