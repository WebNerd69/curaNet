import React from 'react'
import { Clock, Phone, UserRound } from 'lucide-react';
const UpcommingAppointmentCard = () => {
  return (
    <div className='w-full md:w-[450px] h-[300px] bg-zinc-900 rounded-2xl flex flex-col items-center justify-evenly px-5 py-3'>
      <div className='w-full h-1/3 flex justify-between items-start'>
        <div className='w-16 h-16 rounded-full bg-zinc-600 items-center justify-center flex text-2xl font-bold'>
          Dr
        </div>
        <div className='w-[70%] flex flex-col justify-evenly py-2'>
          <h1 className='text-lg font-semibold'>Dr. Tony Tony Chopper</h1>
          <h3 className='text-sm opacity-[.56]'>Pediatrician</h3>
        </div>
      </div>
      <div className='w-full h-1/3 flex justify-between items-start flex-col gap-y-3' >
        <span className='flex items-center gap-5'><Clock className='text-zinc-400 w-5'/> <p>12:00 PM 24-02-2025</p></span>
        <span className='flex items-center gap-5'><UserRound className='text-zinc-400 w-5'/> <p>Rudra Pratap Roy</p></span>
        <span className='flex items-center gap-5'><Phone className='text-zinc-400 w-5'/> <p>9775270246</p></span>
      </div>
      <div className='w-full h-1/3 flex justify-between items-center' >
        <button className='bg-zinc-800 text-white py-3 px-6 rounded-2xl'>Reschedule</button>
        <button className='bg-zinc-800 text-white py-3 px-6 rounded-2xl'>Cancel</button>
      </div>
    </div>
  )
}

export default UpcommingAppointmentCard
