import { Mars, Venus } from 'lucide-react'
import React from 'react'
import {useNavigate} from "react-router-dom"
const AppointmentCard = ({gender,name,age,phone,status,id,userId}) => {
     const navigate = useNavigate()
     console.log("appointment card datas - ",gender , name , phone , age , status , id , userId)
     return (
          <button className='w-full h-[100px] flex justify-between items-center gap-10 text-white ' onClick={()=>navigate(`/patient/${userId}`)}>
               <div className='w-[100%] bg-zinc-900 h-[100px] rounded-3xl grid grid-cols-[100px_2fr_.5fr_.5fr_1fr_.5fr] items-center px-5 text-lg'>
                    <div className='w-16 h-16 rounded-full bg-zinc-800'></div>
                    {/* <p className='opacity-[.56]'>{id}</p> */}
                    <p className=''>{name}</p>
                    <p className='opacity-[.56]'>{age}</p>
                    <p className='text-[#BC37F5]'>{gender==="male"?<Mars/>:<Venus/>}</p>
                    <p className='opacity-[.56]'>{phone}</p>
                    <p className='text-xl opacity-[.56]'>{status}</p>
               </div>
          </button>

     )
}

export default AppointmentCard
