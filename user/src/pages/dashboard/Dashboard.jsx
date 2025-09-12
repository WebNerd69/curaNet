import React, { useState } from 'react'
import UpcommingAppointmentCard from '../../components/UpcommingAppointmentCard'
import { ChevronsUpDown } from 'lucide-react';
const Dashboard = () => {
     const [showAppointments, setShowAppointmewnts] = useState(true)
     return (
          <div className='w-full h-full flex flex-col justify-center md:justify-start items-center px-5 py-3 text-white overflow-x-hidden '>
               <div className='w-full cursor-pointer' onClick={() => setShowAppointmewnts(!showAppointments)}>
                    <span className='w-full text-xl font-semibold mb-10 mt-5 text-center md:text-start flex gap-3 justify-center items-center'>
                         Your Upcomming Appointments <ChevronsUpDown />               </span>
               </div>
               {showAppointments && <div className='w-full flex flex-col md:flex-row gap-14 flex-wrap justify-start md:items-center'>
                    {
                         [1, 2].map((item, index) => {
                              return <UpcommingAppointmentCard key={index} />
                         })
                    }
               </div>}
          </div>
     )
}

export default Dashboard
