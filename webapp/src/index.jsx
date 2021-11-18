import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './app/App';

import { ThemeProvider } from '@mui/material'
import mainTheme from './theme'
import { AuthContextProvider } from './auth/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeProvider >
  </React.StrictMode>,
  document.getElementById('root')
);