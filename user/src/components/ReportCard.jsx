import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const ReportCard = ({ id, doctorName, date }) => {
     const navigate = useNavigate()
     return (
          <div className='w-[80%] grid grid-cols-[2.5fr_1fr_.5fr] justify-center items-center bg-zinc-900 min-h-[80px] rounded-3xl px-5 text-white text-lg'>
               <p>{doctorName}</p>
               <p>{date}</p>
               <button
                    type="button"
                    className='px-7 py-3 border border-zinc-800 rounded-xl font-semibold cursor-pointer disabled:opacity-[.56] disabled:cursor-not-allowed'
                    onClick={() => navigate(`/documents/report/${id}`)}

               >
                    Details
               </button>
          </div>
     )
}

export default ReportCard
