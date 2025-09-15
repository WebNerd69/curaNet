import React from 'react'
import { Clock, Phone, UserRound } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios"
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
const UpcommingAppointmentCard = ({doctor , dateTime , specialization , aptID}) => {
   // submit function
     const {BACKEND_URI} = useContext(UserContext)
    console.log(aptID)
     
   // submit function
   const cancelAppointment = async() => {
     try {
       const res = await axios.put(`${BACKEND_URI}appointment/cancel/${aptID}`)
       if(!res.data.success){
         toast.error("Oops! something went weong")
       }
       else{
         toast.success("Appointment cancelled")
       }
     } catch (error) {
       console.log(error)
       toast.error("OOPS! something went wrong")
     }
 
   }
  return (
    <div className='w-full md:w-[450px] h-[250px] bg-zinc-900 rounded-2xl flex flex-col items-center justify-evenly px-5 py-3'>
      <div className='w-full h-1/3 flex justify-between items-start'>
        <div className='w-16 h-16 rounded-full bg-zinc-600 items-center justify-center flex text-2xl font-bold'>
          Dr
        </div>
        <div className='w-[70%] flex flex-col justify-center py-2'>
          <h1 className='text-lg font-semibold'>{doctor}</h1>
          {/* <h3 className='text-sm opacity-[.56]'>{specialization}</h3> */}
        </div>
      </div>
      <div className='w-full h-1/2 flex justify-center flex-col gap-y-3' >
        <span className='flex items-center gap-5'><Clock className='text-zinc-400 w-5'/> <p>{dateTime}</p></span>
        <span className='flex items-center gap-5'><p>{aptID}</p></span>
        {/* <span className='flex items-center gap-5'><Phone className='text-zinc-400 w-5'/> <p>9775270246</p></span> */}
      </div>
      <div className='w-full h-1/3 flex justify-between items-center' >
        <NavLink to={"/appointments/reschedule"} className='bg-zinc-800 text-white py-3 px-6 rounded-2xl'>Reschedule</NavLink>
        <button className='bg-zinc-800 text-white py-3 px-6 rounded-2xl' onClick={cancelAppointment}>Cancel</button>
      </div>
    </div>
  )
}

export default UpcommingAppointmentCard
