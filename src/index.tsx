import { StrictMode } from 'react';
import { render } from 'react-dom';
import 'assets/css/index.css';
import Router from 'routes/Router';
import App from './App';

render(
  <StrictMode>
    <Router app={App} />
  </StrictMode>,
  document.getElementById('root'),
);
