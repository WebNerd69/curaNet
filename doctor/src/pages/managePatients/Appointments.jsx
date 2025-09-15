import React from 'react'
import AppointmentCard from '../../components/AppointmentCard'

const Appointments = () => {
  return (
    <div className='w-full h-[100vh] flex items-center text-white p-10 overflow-auto flex-col gap-y-10'>
      <AppointmentCard name={"John sharma"} age={69} gender={"female"} phone={"1234567890"} status={"pending"} id={"14cas24c4ca2cac"}/>
    </div>
  )
}

export default Appointments
