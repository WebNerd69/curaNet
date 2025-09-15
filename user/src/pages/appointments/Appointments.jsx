import React from 'react'
import AppointmentCard from '../../components/AppointmentCard'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from "axios"

const Appointments = () => {
  const {userData , BACKEND_URI} = useContext(UserContext)
  const [appointments, setAppointments] = useState()
  const fetchData = async ()=>{
    try {
      const res = await axios.get(`${BACKEND_URI}appointment/user/${userData._id}`)
      if(!res.data.success){
        toast.error("Oops! something went wrong")
      }
      setAppointments(res.data.data)
      console.log(res.data.data)

    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='w-full md:h-[100vh] min-h-screen flex items-center  text-white p-10 md:overflow-auto flex-col relative gap-y-10'>
      {
        Array.isArray(appointments) && appointments.length>0 ? appointments.map((item,index)=>{
          return(
            <AppointmentCard name={item.doctorName} status={item.status} id={item._id} key={index} date={item.dateTime}/>
          )
        }):
        <p className='w-full text-center text-xl text-white '>
          No appointments to show
        </p>
      }
    </div>
  )
}

export default Appointments
