import { Mars, Venus } from 'lucide-react'
import React from 'react'

const Bed = ({ ward, bedNumber, patientName, available, gender }) => {
     return (
          <div className={`bg-gradient-to-b ${available ? 'from-[#49197D] to-[#49197d5b]' : "from-[#27272A] to-[#27272a76]"} h-28 w-[75%] mx-auto rounded-2xl flex-col flex justify-evenly relative group `}>
               <p className='font-medium text-center text-lg'>{ward}</p>
               <p className='font-medium text-center text-lg'>{bedNumber}</p>
               <span className="px-5 py-3 bg-[#18181829] text-zinc-300 absolute text-sm -right-10 -top-5 rounded-xl backdrop-blur-lg hidden group-hover:flex items-center gap-2">
                    {available ? "Available" : patientName}
                    {!available && (
                         gender === "Male"
                              ? <Mars className="w-6 text-[#49197D] font-bold" />
                              : <Venus className="w-6 text-[#BC37F5] font-bold" />
                    )}
               </span>

          </div>
     )
}

export default Bed
