import { StrictMode } from 'react';
import { render } from 'react-dom';
import 'assets/css/index.css';
import Router from 'routes/Router';

render(
  <StrictMode>
    <Router isAuth />
  </StrictMode>,
  document.getElementById('root'),
);
