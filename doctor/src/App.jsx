import React from 'react'
import Dashboard from './pages/dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'

import Appointments from './pages/managePatients/Appointments'
import Beds from './pages/managePatients/Beds'
import Patient from './pages/managePatients/Patient'
import "./App.css"
import AdmittedPatient from './pages/managePatients/AdmittedPatient'
import Profile from './pages/profile/Profile'
const App = () => {
  return (
    <div className='w-[80vw] h-[100vh] relative'>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/appointments' element={<Appointments/>}/>
        <Route path='/beds' element={<Beds/>}/>
        <Route path='/patient/:id' element={<Patient/>}/>
        <Route path='/admitted-patient/:id' element={<AdmittedPatient/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>

    </div>
  )
}

export default App
