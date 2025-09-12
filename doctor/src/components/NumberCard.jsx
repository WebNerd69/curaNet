import React from 'react'
import {TrendingUp , TrendingDown} from 'lucide-react'
const NumberCard = ({heading , trend , trendPercent , body , lowText }) => {
  return (
    <div className='flex flex-col items-center justify-between bg-zinc-900 border border-zinc-800 rounded-3xl w-[25%] h-full text-zinc-200 p-7'>
     <div className='w-full flex justify-between'>
          <p className='opacity-[.56]'>{heading}</p>
          {trend==="up"&&<span className='flex text-xs gap-1 py-1 px-2 rounded-lg border border-zinc-600 font-medium'><TrendingUp className='w-4 h-4 text-[#BC37F5]'/>+{trendPercent}% </span>}
          {trend==="down"&&<span className='flex text-xs gap-1 py-1 px-2 rounded-lg border border-zinc-600 font-medium'><TrendingDown className='w-4 h-4 text-[#BC37F5]'/>-{trendPercent}% </span>}
     </div>
     <div className='w-full mb-5'>
          <p className='font-bold text-5xl'>{body}</p>
     </div>
     <div className='w-full flex flex-col'>
          {trend==="up"&&<p className='flex items-center gap-3 font-medium'>Trending up this month <TrendingUp className='w-4 h-4 text-[#BC37F5]'/></p>}
          {trend==="down"&&<p className='flex items-center gap-3 font-medium'>Trending down this month <TrendingDown className='w-4 h-4 text-[#BC37F5]'/></p>}
          <p className='text-sm opacity-[.56]'>{lowText}</p>
     </div>
    </div>
  )
}

export default NumberCard