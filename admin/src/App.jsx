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
import { useAuth0 } from "@auth0/auth0-react"
import { useContext } from 'react';
import { AdminContext } from './context/AdminContext';
import axios from "axios"

const App = () => {
  const { user, loginWithRedirect, isAuthenticated, isLoading , logout } = useAuth0();
  const { BACKEND_URI, setUserData ,setAdminToken} = useContext(AdminContext)

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
      setUserData(res.data.staff)
      setAdminToken(res.data.token)
    } catch (err) {
      console.log(err)
      logout()
    }
  }
useEffect(()=>{
  fetchStaff()
},[isAuthenticated,user])

console.log(user)
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
