import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Header from './features/Header'

import LandingLayout from './pages/Landing/LandingLayout'
import LandingCard from './components/LandingCard'
import LoginCard from './components/LoginCard'
import RecoverPasswordCard from './components/RecoverPasswordCard'
import RegisterCard from './components/RegisterCard'
import SuccessfulLoginCard from './components/SuccessfulLoginCard'
import SuccessfulPasswordResetCard from './components/SuccessfulPasswordResetCard'
import SuccessfulRegisterCard from './components/SuccessfulRegisterCard'

import SuccessfulLogout from './pages/Success/SuccessfulLogout'

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
          <Route path='/login/success' element={<SuccessfulLoginCard />} />
          <Route path='/forgot-password' element={<RecoverPasswordCard />} />
          <Route path='/forgot-password/success' element={<SuccessfulPasswordResetCard />} />
          <Route path='/register' element={<RegisterCard />} />
          <Route path='/register/success' element={<SuccessfulRegisterCard />} />
          
        </Route>

        <Route element={<RequireAuth />}>

          <Route path='/home' element={<Home />} />
          <Route path='/team' element={<TeamsUser />} />
          <Route path='/team/:id' element={<Teams />} />
          <Route path='/skill' element={<Skills />} />

        </Route>

        <Route path='/logout-success' element={<SuccessfulLogout />} />

        <Route path='/unauthorized' element={<Unauthorized />} />
        <Route path='/internal' element={<InternalServer />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;