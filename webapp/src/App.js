import './App.css' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Header from './components/Header'

import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import RecoverPassword from './pages/RecoverPassword/RecoverPassword'
import SuccessfulLogin from './pages/Login/SuccessfulLogin'
import SuccessfulPassword from './pages/RecoverPassword/SuccessfulPassword'
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
      <Router>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login/success' element={<SuccessfulLogin />} />
          <Route path='/logout-success' element={<SuccessfulLogout />} />
          <Route path='/forgot-password' element={<RecoverPassword />} />
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
  );
}

export default App;