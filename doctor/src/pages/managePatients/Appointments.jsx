import React from 'react'
import AppointmentCard from '../../components/AppointmentCard'
import { useState } from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

const Appointments = () => {
  const {appointments} = useContext(DoctorContext)
  console.log("appointments" , appointments)
  return (
    <div className='w-full h-[100vh] flex items-center text-white p-10 overflow-auto flex-col gap-y-10'>
      {
        appointments.map((item,index)=>{
          return(
            <AppointmentCard gender={item.gender} name={item.userName} age={item.age} phone={item.phone} status={item.status} key={index} id={item._id} userId={item.userId} />

          )
        })
      }
    </div>
  )
}

export default Appointments
