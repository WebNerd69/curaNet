import { Mars, Venus } from 'lucide-react'
import React from 'react'

const AppointmentCard = ({gender,name,age,phone,status}) => {
     return (
          <div className='w-full h-[100px] flex justify-between items-center gap-10 text-white'>
               <div className='w-[100%] bg-zinc-900 h-[100px] rounded-3xl grid grid-cols-[100px_2fr_.5fr_.5fr_1fr_.5fr] items-center px-5 text-lg'>
                    <div className='w-16 h-16 rounded-full bg-zinc-800'></div>
                    <p className=''>{name}</p>
                    <p className='opacity-[.56]'>{age}</p>
                    <p className='opacity-[.56]'>{gender==="male"?<Mars/>:<Venus/>}</p>
                    <p className='opacity-[.56]'>{phone}</p>
                    <p className='text-xl opacity-[.56]'>{status}</p>
               </div>
          </div>

     )
}

export default AppointmentCard
