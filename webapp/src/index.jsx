import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import './index.css';
import mainTheme from './theme'
import { ThemeProvider } from '@mui/material'

import { UserInfoContextProvider } from './core/hooks/useUserInfo';
import { TeamsContextProvider } from './core/hooks/useTeams';
import { SkillsContextProvider } from './core/hooks/useSkills';
import { AuthContextProvider } from './auth/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <UserInfoContextProvider>
        <TeamsContextProvider>
          <SkillsContextProvider>
            <AuthContextProvider>
              <App />
            </AuthContextProvider>
          </SkillsContextProvider>
        </TeamsContextProvider>
      </UserInfoContextProvider>
    </ThemeProvider >
  </React.StrictMode>,
  document.getElementById('root')
);