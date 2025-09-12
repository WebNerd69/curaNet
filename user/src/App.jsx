import React from 'react'
import './App.css'
import { Routes , Route } from 'react-router-dom'

// dashboard
import Dashboard from './pages/dashboard/Dashboard'


// appointments
import Appointments from './pages/appointments/Appointments'
import BookAppointment from './pages/appointments/BookAppointment'
import RescheduleAppointment from './pages/appointments/RescheduleAppointment'
import CancelAppointment from './pages/appointments/CancelAppointment'

// documents
import Prescriptions from './pages/documents/Prescriptions'
import Reports from './pages/documents/Reports'
import Payments from './pages/documents/Payments'


const App = () => {
  return (
    <div className='w-[100vw] lg:w-[80vw] bg-zinc-950 min-h-screen relative'>
      <Routes>
        {/* Dashboard */}
        <Route path={'/'} element={<Dashboard/>}/>

        {/* documents */}
        <Route path={'/documents/prescriptions'} element={<Prescriptions/>}/>
        <Route path={'/documents/reports'} element={<Reports/>}/>
        <Route path={'/documents/payments'} element={<Payments/>}/>

        {/* Appointments */}
        <Route path={'/appointments'} element={<Appointments/>}/>
        <Route path={'/appointments/book'} element={<BookAppointment/>}/>
        <Route path={'/appointments/reschedule'} element={<RescheduleAppointment/>}/>
        <Route path={'/appointments/cancel'} element={<CancelAppointment/>}/>
      </Routes>
    </div>
  )
}

export default App