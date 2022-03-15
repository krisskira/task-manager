import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './core/config/router';
import AppTheme from './core/config/theme';

ReactDOM.render(
  <React.StrictMode>
    <AppTheme>
      <AppRouter />
    </AppTheme>
  </React.StrictMode>,
  document.getElementById('root')
);
