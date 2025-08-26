import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard'
import './App.css'
import AddStaff from './Pages/AddStaff';
import SeeStaff from './Pages/SeeStaff';
import FireStaff from './Pages/FireStaff';
import AssignStaff from './Pages/AssignStaff';
import ManagePayroll from './Pages/ManagePayroll';
import OtpInput from './components/OtpInput';
import SeeBeds from './Pages/SeeBeds';
import AddBeds from './Pages/AddBeds';
import RemoveBeds from './Pages/RemoveBeds';
import ProfileSetting from './Pages/ProfileSetting';
import ChangePassword from './Pages/ChangePassword';
import Profile from './Pages/Profile';



const App = () => {

  return (
    <div className='w-[80vw] px-10 flex flex-col items-center justify-center '>

      <Routes>
        {/* auth */}
        <Route path='/auth/otp' element={<OtpInput />} />
        {/* dashboard */}
        <Route path='/' element={<Dashboard />} />
        {/* staff */}
        <Route path='/staff' element={<SeeStaff />} />
        <Route path='/staff/add' element={<AddStaff />} />
        <Route path='/staff/fire' element={<FireStaff />} />
        <Route path='/staff/assign' element={<AssignStaff />} />
        <Route path='/staff/manage-payroll' element={<ManagePayroll />} />
        {/* beds */}
        <Route path='/beds' element={<SeeBeds />} />
        <Route path='/beds/add' element={<AddBeds />} />
        <Route path='/beds/remove' element={<RemoveBeds />} />
        {/* profile */}
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/settings' element={<ProfileSetting />} />
        <Route path='/profile/change-password' element={<ChangePassword />} />
      </Routes>

    </div>
  )
}

export default App
