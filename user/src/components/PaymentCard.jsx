import React from 'react'
import { BadgeIndianRupee, IndianRupee } from 'lucide-react';
const PaymentCard = ({ doctorName, totalBill, date , status }) => {
     return (
          <div className='w-[80%] grid grid-cols-[2fr_1.5fr_.7fr_.3fr] justify-center items-center bg-zinc-900 min-h-[80px] rounded-3xl px-5 text-white text-lg'>
               <p className='px-5'>{doctorName}</p>
               <p>{date}</p>
               <p className='flex items-center gap-1'><IndianRupee className='w-5 h-5 '/>{totalBill}</p>
               <p>{status==="completed"?<BadgeIndianRupee className='w-10 h-10 text-green-400'/>:<BadgeIndianRupee className='w-10 h-10 text-yellow-400'/>}</p>

          </div>
     )
}

export default PaymentCard
