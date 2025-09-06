import React from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import { Routes , Route } from 'react-router-dom'

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

const App = () => {
  return (
    <div className='w-[80vw] bg-zinc-950 min-h-screen relative'>
      <Routes>
        {/* Dashboard */}
        <Route path={'/'} element={<Dashboard/>}/>
        {/* Patients */}
        <Route path={'/patients'} element={<Patients/>}/>
        <Route path={'/patients/add'} element={<AddPatient/>}/>

        {/* beds */}
        <Route path={'/beds'} element={<SeeBeds/>}/>
        <Route path={'/beds/assign'} element={<AssignBed/>}/>
        {/* Appointments */}
        <Route path={'/appointments'} element={<Appointments/>}/>
        <Route path={'/appointments/book'} element={<BookAppointment/>}/>
        <Route path={'/appointments/reschedule'} element={<RescheduleAppointment/>}/>
        <Route path={'/appointments/cancel'} element={<CancelAppointments/>}/>
      </Routes>
    </div>
  )
}

export default App
