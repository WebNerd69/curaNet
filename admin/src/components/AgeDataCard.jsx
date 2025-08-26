import React, { useState } from 'react'
import {
     ComposedChart,
     Line,
     Area,
     Bar,
     XAxis,
     YAxis,
     CartesianGrid,
     Tooltip,
     Legend,
     ResponsiveContainer,
} from 'recharts';

const data = [
     {
          ageGroup: '0-3',
          patients: 59,
     },
     {
          ageGroup: '3-7',
          patients: 37,
     },
     {
          ageGroup: '7-12',
          patients: 24,
     },
     {
          ageGroup: '12-18',
          patients: 28,
     },
     {
          ageGroup: '18-24',
          patients: 32,
     },
     {
          ageGroup: '24-36',
          patients: 16,
     },
     {
          ageGroup: '36-45',
          patients: 49,
     },
     {
          ageGroup: '45-60',
          patients: 10,
     },
     {
          ageGroup: '60+',
          patients: 17,
     },

];

const AgeDataCard = () => {
     // state variables
     const [ageDataTime,setAgeDataTime]=useState("Last 3 months")

     // handler functions
     const ageDataTimeHandler =(e)=>{
          setAgeDataTime(e)
     }
     return (
          <div className='w-[65%] h-[50vh] bg-zinc-900 border border-zinc-800 rounded-3xl p-6'>
               <div className='w-full flex justify-between items-center px-4'>
                    <span className='flex flex-col text-zinc-200'>
                         <p className='font-medium text-xl'>Age group</p>
                         <p className='text-sm opacity-[.56]'>Age group of patentients for past {`3 months`}</p>
                    </span>
                    <span className='w-[450px] h-[45px] bg-zinc-900 flex rounded-2xl text-zinc-200 font-medium'>
                         <button className={`w-[150px] border-r-2 border-zinc-800 rounded-l-2xl ${ageDataTime === "Last 3 months" ? "bg-zinc-800" : "bg-transparent"} transition-all duration-200`} onClick={() => ageDataTimeHandler("Last 3 months")}>Last 3 months</button>
                         <button className={`w-[150px] border-r-2 border-zinc-800 ${ageDataTime === "Last 1 month" ? "bg-zinc-800" : "bg-transparent"} transition-all duration-200`} onClick={() => ageDataTimeHandler("Last 1 month")}>Last 1 month</button>
                         <button className={`w-[150px] rounded-r-2xl ${ageDataTime === "Last 7 days" ? "bg-zinc-800" : "bg-transparent"} transition-all duration-200`} onClick={() => ageDataTimeHandler("Last 7 days")}>Last 7 days</button>
                    </span>
               </div>
               <ResponsiveContainer width="100%" height="95%">
                    <ComposedChart
                         width={400}
                         height={300}
                         data={data}
                         margin={{
                              top: 20,
                              right: 20,
                              bottom: 20,
                              left: 20,
                         }}
                    >
                         <XAxis dataKey="ageGroup" scale="auto" />
                         <Tooltip contentStyle={{ borderRadius: '15px', fontWeight: 'semibold', backgroundColor: "#181818", border: 'none', paddingRight: '20px', paddingLeft: '20px', paddingTop: '10px', paddingBottom: '10px' }} labelStyle={{ color: '#fff' }} itemStyle={{color:"#BC37F5"}} />
                         <Bar dataKey="patients" barSize={60} fill="url(#colorPv)" radius={15} />
                         <Line type="monotone" dataKey="patients" stroke="#BC37F5" />
                         <Legend/>
                    </ComposedChart>
               </ResponsiveContainer>
          </div>
     )
}

export default AgeDataCard