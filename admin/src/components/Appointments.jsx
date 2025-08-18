import React from 'react'
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const data02 = [
     { name: 'Completed', value: 2400 },
     { name: 'Pending', value: 456 },
     { name: 'Canceled', value: 130 },
]
const Appointments = () => {
     return (
          <div className='w-[35%] h-[50vh] bg-zinc-900 border border-zinc-800 rounded-3xl p-6'>
               <div className='w-full flex justify-between items-center'>
                    <span className='flex flex-col text-zinc-200'>
                         <p className='font-medium text-xl'>Appointment overview</p>
                         <p className='text-sm opacity-[.56]'>Appointment overview for past 3 months</p>
                    </span>
               </div>
               <div className='w-full h-full'>
                    <ResponsiveContainer width="100%" height="100%">

                         <PieChart width={400} height={400}>
                              <Pie dataKey="value" data={data02} innerRadius={80} outerRadius={160} fill="url(#colorPv)" stroke='#181818' strokeWidth={10} />
                              <Tooltip contentStyle={{ borderRadius: '15px', fontWeight: 'semibold', backgroundColor: "#181818", border: 'none', paddingRight: '20px', paddingLeft: '20px', paddingTop: '10px', paddingBottom: '10px' }} itemStyle={{ color: '#fff' }} />
                         </PieChart>
                    </ResponsiveContainer>
               </div>
          </div>
     )
}

export default Appointments