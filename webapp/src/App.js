import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/UI/GlobalStyle';
import Landing from './pages/Login/Landing';
import { ThemeProvider } from '@mui/material';
import mainTheme from './theme'
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
