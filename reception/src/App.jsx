import React, { useContext, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import { Routes, Route } from 'react-router-dom'

// dashboard
import Dashboard from './pages/dashboard/Dashboard'

// patients
import Patients from './pages/patients/Patients'
import AddPatient from './pages/patients/AddPatient'

// beds
import SeeBeds from './pages/bed/SeeBed'
import AssignBed from './pages/bed/AssignBed'

// appointments
import Appointments from './pages/appointment/Appointments'
import BookAppointment from './pages/appointment/BookAppointment'
import RescheduleAppointment from './pages/appointment/RescheduleAppointment'
import CancelAppointments from './pages/appointment/CancelAppointments'
import { ReceptionContext } from './context/ReceptionContext'
import { useAuth0 } from '@auth0/auth0-react'
import axios from "axios"

import { ToastContainer } from 'react-toastify'
import Profile from './pages/profile/Profile'
const App = () => {
  const { user, loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();
  const { BACKEND_URI, setUserData, setReceptionistToken } = useContext(ReceptionContext)

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
      if (!res.data.success) {
        // console.log(res)
        logout()
      }
      console.log(res.data)
      setUserData(res.data.staff)
      setReceptionistToken(res.data.token)
    } catch (err) {
      console.log(err)
      logout()
    }
  }
  useEffect(() => {
    fetchStaff()
  }, [isAuthenticated, user])

  console.log(user)
  return (
    <div className='w-[80vw] bg-zinc-950 min-h-screen relative'>
      <ToastContainer/>
      <Routes>
        {/* Dashboard */}
        <Route path={'/'} element={<Dashboard />} />
        {/* Patients */}
        <Route path={'/patients'} element={<Patients />} />
        <Route path={'/patients/add'} element={<AddPatient />} />

        {/* beds */}
        <Route path={'/beds'} element={<SeeBeds />} />
        <Route path={'/beds/assign'} element={<AssignBed />} />
        {/* Appointments */}
        <Route path={'/appointments'} element={<Appointments />} />
        <Route path={'/appointments/book'} element={<BookAppointment />} />
        <Route path={'/appointments/reschedule'} element={<RescheduleAppointment />} />
        <Route path={'/appointments/cancel'} element={<CancelAppointments />} />

        <Route path={'/profile'} element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
