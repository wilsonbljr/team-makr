import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './components/UI/GlobalStyle'
import { ThemeProvider } from '@mui/material'
import mainTheme from './theme'
import Header from './components/Header'

import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import ForgotPassword from './pages/Register/ForgotPassword'
import SuccessfulLogin from './pages/Login/SuccessfulLogin'
import SuccessfulPassword from './pages/Register/SuccessfulPassword'
import SuccessfulLogout from './pages/Login/SuccessfulLogout'

import Register from './pages/Register/Register'
import SuccessfulRegister from './pages/Register/SuccessfulRegister'

import Home from './pages/Home/Home'
import EditProfile from './pages/Home/EditProfile'

import InternalServer from './pages/Error/InternalServer'
import NotFound from './pages/Error/NotFound'
import Unauthorized from './pages/Error/Unauthorized'

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />

          <Route path='/login' element={<Login />} />
          <Route path='/login/success' element={<SuccessfulLogin />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/logout-success' element={<SuccessfulLogout />} />
          <Route path='/forgot-password/success' element={<SuccessfulPassword />} />

          <Route path='/register' element={<Register />} />
          <Route path='/register/success' element={<SuccessfulRegister />} />

          <Route path='/home' element={<Home />} />
          <Route path='/editprofile' element={<EditProfile />} />
          
          <Route path='/unauthorized' element={<Unauthorized />} />
          <Route path='/internal' element={<InternalServer />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider >
  );
}

export default App;