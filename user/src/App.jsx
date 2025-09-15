import React, { useContext, useEffect } from 'react'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import {ToastContainer} from "react-toastify"

// axios
import axios from "axios"
// auth0
import {useAuth0} from "@auth0/auth0-react"

// dashboard
import Dashboard from './pages/dashboard/Dashboard'


// appointments
import Appointments from './pages/appointments/Appointments'
import BookAppointment from './pages/appointments/BookAppointment'
import RescheduleAppointment from './pages/appointments/RescheduleAppointment'
import CancelAppointment from './pages/appointments/CancelAppointment'

// documents
import Reports from './pages/documents/Reports'
import Payments from './pages/documents/Payments'
import { UserContext } from './context/UserContext'
import Profile from './pages/profile/Profile'
import ReportPage from './pages/documents/ReportPage'


const App = () => {
  const {user , loginWithRedirect , isAuthenticated , isLoading} = useAuth0();
  const {BACKEND_URI , setUserData} = useContext(UserContext)
  if(isLoading){
    return(
      <div className='z-40 w-[100vw] h-[100vh] absolute top-0 left-0 bg-zinc-950 flex items-center justify-center text-white font-semibold text-xl'>
        <p>
          Loading please wait...
        </p>
      </div>
    )
  }

  if(isAuthenticated === false){
    loginWithRedirect()
    return (null)
  }

   useEffect(() => {
    if (isAuthenticated && user) {
      // send user to backend
      axios.post(`${BACKEND_URI}user/check-or-create`, {
        email: user.email,
        name: user.name
      })
      .then(res => {
        axios.post(`${BACKEND_URI}user/get-user-by-email`,{
          email : user.email
        })
        .then(res=>{
          setUserData(res.data)
          console.log("usserData" ,res.data)
        })
        .catch(err => console.error(err));
        console.log(res.data.message); // either "New user created" or "User exists"
      })
      .catch(err => console.error(err));
    }
  }, [isAuthenticated, user]);

  console.log(user)

  return (
    <div className='w-[100vw] lg:w-[80vw] bg-zinc-950 min-h-screen relative'>
      <ToastContainer/>
      <Routes>
        {/* Dashboard */}
        <Route path={'/'} element={<Dashboard/>}/>

        {/* documents */}
        <Route path={'/documents/reports'} element={<Reports/>}/>
        <Route path={'/documents/report/:_id'} element={<ReportPage/>}/>
        <Route path={'/documents/payments'} element={<Payments/>}/>

        {/* Appointments */}
        <Route path={'/appointments'} element={<Appointments/>}/>
        <Route path={'/appointments/book'} element={<BookAppointment/>}/>
        <Route path={'/appointments/reschedule'} element={<RescheduleAppointment/>}/>
        <Route path={'/appointments/cancel'} element={<CancelAppointment/>}/>

        {/* profile */}
        <Route path={'/profile'} element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App