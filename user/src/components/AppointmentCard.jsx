import { Mars, Venus } from 'lucide-react'
import React from 'react'

const AppointmentCard = ({gender,name,date,status,id}) => {
     return (
          <div className='w-full md:h-[100px] h-[300px] flex justify-between items-center gap-10 text-white'>
               <div className='w-[100%] bg-zinc-900 h-full rounded-3xl md:grid md:grid-cols-[100px_1fr_2fr_1fr_.5fr_.5fr] flex flex-col md:items-center p-5 text-lg gap-y-3'>
                    <div className='w-16 h-16 rounded-full bg-zinc-800'></div>
                    <p className='opacity-[.56]'>{id}</p>
                    <p className=''>{name}</p>
                    <p className=''>{date}</p>
                    <p className='text-[#BC37F5]'>{gender==="male"?<Mars/>:<Venus/>}</p>
                    <p className='text-xl opacity-[.56]'>{status}</p>
               </div>
          </div>

     )
}

export default AppointmentCard
