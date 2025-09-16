import React from 'react'
import Dashboard from './pages/dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'

import Appointments from './pages/managePatients/Appointments'
import Beds from './pages/managePatients/Beds'
import Patient from './pages/managePatients/Patient'
import "./App.css"
import AdmittedPatient from './pages/managePatients/AdmittedPatient'
import Profile from './pages/profile/Profile'
import axios from "axios"
import { ToastContainer } from "react-toastify"
import { useContext } from 'react'
import { DoctorContext } from './context/DoctorContext'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
const App = () => {
  const { user, loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();
  const { userData, setUserData, BACKEND_URI,setDoctorToken } = useContext(DoctorContext)

  if (isLoading) {
    return (
      <div className='z-40 w-[100vw] h-[100vh] absolute top-0 left-0 bg-zinc-950 flex items-center justify-center text-white font-semibold text-xl'>
        <p>
          Loading please wait...
        </p>
      </div>
    )
  }

  if (isAuthenticated === false) {
    loginWithRedirect()
    return (null)
  }
  const fetchStaff = async () => {
    try {
      const res = await axios.post(`${BACKEND_URI}staff/get-staff-by-email`, {
        email: user.email
      })
      // console.log(res)
      if (!res.data.success) {
        // console.log(res)
        logout()
      }
      setUserData(res.data.staff)
      setDoctorToken(res.data.token)
    } catch (err) {
      // console.log(err)
      logout()
    }
  }
useEffect(()=>{
  fetchStaff()
},[isAuthenticated,user])

console.log(user)
  return (
    <div className='w-[80vw] h-[100vh] relative'>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/appointments' element={<Appointments />} />
        <Route path='/beds' element={<Beds />} />
        <Route path='/patient/:userId' element={<Patient />} />
        <Route path='/admitted-patient/:userId' element={<AdmittedPatient />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>

    </div>
  )
}

export default App
