import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Header from './features/Header'

import LandingCard from './components/LandingCard'
import LoginCard from './features/LoginCard'
import LandingLayout from './pages/Landing/LandingLayout'

import SuccessfulLogin from './pages/Login/SuccessfulLogin'
import SuccessfulPassword from './pages/RecoverPassword/SuccessfulPassword'
import SuccessfulLogout from './pages/Login/SuccessfulLogout'
import SuccessfulRegister from './pages/Register/SuccessfulRegister'

import Home from './pages/Home/Home'
import TeamsUser from './pages/Team/TeamsUser'
import Teams from './pages/Team/Teams'
import Skills from './pages/Skills/Skills'

import Unauthorized from './pages/Error/Unauthorized'
import InternalServer from './pages/Error/InternalServer'
import NotFound from './pages/Error/NotFound'

import RequireAuth from '../auth/RequireAuth'

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Routes>
        <Route element={<LandingLayout />}>

          <Route path='/' element={<LandingCard />} />
          <Route path='/login' element={<LoginCard />} />
          
        </Route>

        <Route element={<RequireAuth />}>

          <Route path='/home' element={<Home />} />
          <Route path='/team' element={<TeamsUser />} />
          <Route path='/team/:id' element={<Teams />} />
          <Route path='/skill' element={<Skills />} />

        </Route>

        <Route path='/login/success' element={<SuccessfulLogin />} />
        <Route path='/logout-success' element={<SuccessfulLogout />} />
        <Route path='/forgot-password/success' element={<SuccessfulPassword />} />
        <Route path='/register/success' element={<SuccessfulRegister />} />

        <Route path='/unauthorized' element={<Unauthorized />} />
        <Route path='/internal' element={<InternalServer />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;