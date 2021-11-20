import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import mainTheme from './theme'
import { ThemeProvider } from '@mui/material'
import { AuthContextProvider } from './auth/AuthContext';
import { UserInfoContextProvider } from './core/hooks/useUserInfo';
import { TeamsContextProvider } from './core/hooks/useTeams';
import { SkillsContextProvider } from './core/hooks/useSkills';

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