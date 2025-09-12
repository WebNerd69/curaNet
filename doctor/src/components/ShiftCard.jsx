import React, { useEffect, useState } from 'react'

const ShiftCard = () => {
     const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // convert to 12-hour format
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${minutes} ${ampm}`;
  };
  return (
    <div className='flex flex-col items-center justify-between bg-zinc-900 border border-zinc-800 rounded-3xl w-[25%] h-full text-zinc-200 p-7'>
     <div className='w-full flex justify-between'>
          <p className='opacity-[.56]'>Clock</p>
     </div>
     <div className='w-full mb-5'>
          <p className='font-semibold text-5xl'>{formatTime(time)}</p>
     </div>
     <div className='w-full flex flex-col'>
          <p className='flex items-center gap-3 font-medium'>Shift duration</p>
          <p className='text-sm opacity-[.56]'>12 hours</p>
     </div>
    </div>
  )
}

export default ShiftCard