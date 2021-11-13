import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/UI/GlobalStyle';
import { ThemeProvider } from '@mui/material';
import Landing from './pages/Login/Landing';
import mainTheme from './theme'
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Home from './pages/Home/Home';
import EditProfile from './pages/Home/EditProfile';
import ForgotPassword from './pages/Login/ForgotPassword';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/editprofile' element={<EditProfile />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </ThemeProvider >
  );
}

export default App;