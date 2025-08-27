import React from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Patients from './pages/Patients'
import AddPatient from './pages/AddPatient'
const App = () => {
  return (
    <div className='w-[80vw] bg-zinc-950 min-h-screen relative'>
      <Routes>
        {/* Dashboard */}
        <Route path={'/'} element={<Dashboard/>}/>
        {/* Patients */}
        <Route path={'/patients'} element={<Patients/>}/>
        <Route path={'/patients/add'} element={<AddPatient/>}/>
      </Routes>
    </div>
  )
}

export default App
