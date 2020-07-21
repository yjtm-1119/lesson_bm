import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes/index.js';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);