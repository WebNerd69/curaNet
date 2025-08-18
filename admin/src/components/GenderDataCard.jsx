import React, { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const genderData = [
  {
    date: 'Jan 12',
    Males: 4000,
    Females: 2400,
    collection: 2400,
  },
  {
    date: 'Jan 13',
    Males: 3000,
    Females: 1398,
    collection: 2210,
  },
  {
    date: 'Jan 14',
    Males: 2000,
    Females: 4800,
    collection: 2290,
  },
  {
    date: 'Jan 15',
    Males: 2780,
    Females: 3908,
    collection: 2000,
  },
  {
    date: 'Jan 16',
    Males: 1890,
    Females: 4800,
    collection: 2181,
  },
  {
    date: 'Jan 17',
    Males: 2390,
    Females: 3800,
    collection: 2500,
  },
  {
    date: 'Jan 18',
    Males: 3490,
    Females: 4300,
    collection: 2100,
  },
  {
    date: 'Jan 19',
    Males: 3690,
    Females: 2300,
    collection: 2100,
  },
  {
    date: 'Jan 20',
    Males: 4490,
    Females: 300,
    collection: 2100,
  },
  {
    date: 'Jan 21',
    Males: 390,
    Females: 4000,
    collection: 2100,
  },
  {
    date: 'Jan 22',
    Males: 3200,
    Females: 4100,
    collection: 2400,
  },
  {
    date: 'Jan 23',
    Males: 2800,
    Females: 3600,
    collection: 2600,
  },
  {
    date: 'Jan 24',
    Males: 4200,
    Females: 2000,
    collection: 2300,
  },
  {
    date: 'Jan 25',
    Males: 3900,
    Females: 3100,
    collection: 2500,
  },
  {
    date: 'Jan 26',
    Males: 4700,
    Females: 2600,
    collection: 2700,
  },
  {
    date: 'Jan 27',
    Males: 3100,
    Females: 3700,
    collection: 2800,
  },
  {
    date: 'Jan 28',
    Males: 2200,
    Females: 4200,
    collection: 2000,
  },
  {
    date: 'Jan 29',
    Males: 3600,
    Females: 3900,
    collection: 2900,
  },
  {
    date: 'Jan 30',
    Males: 4000,
    Females: 4400,
    collection: 3100,
  },
  {
    date: 'Jan 31',
    Males: 5000,
    Females: 2800,
    collection: 3000,
  },
  {
    date: 'Feb 1',
    Males: 3700,
    Females: 2500,
    collection: 2700,
  },
  {
    date: 'Feb 2',
    Males: 4200,
    Females: 3300,
    collection: 2800,
  },
  {
    date: 'Feb 3',
    Males: 4500,
    Females: 4000,
    collection: 3500,
  },
  {
    date: 'Feb 4',
    Males: 2600,
    Females: 3900,
    collection: 2400,
  },
  {
    date: 'Feb 5',
    Males: 3000,
    Females: 4700,
    collection: 2600,
  },
  {
    date: 'Feb 6',
    Males: 3300,
    Females: 4100,
    collection: 2800,
  },
  {
    date: 'Feb 7',
    Males: 3900,
    Females: 3500,
    collection: 3000,
  },
  {
    date: 'Feb 8',
    Males: 3100,
    Females: 2900,
    collection: 2500,
  },
  {
    date: 'Feb 9',
    Males: 2700,
    Females: 3700,
    collection: 2300,
  },
  {
    date: 'Feb 10',
    Males: 3500,
    Females: 4200,
    collection: 2800,
  },
  {
    date: 'Feb 11',
    Males: 4000,
    Females: 3800,
    collection: 3200,
  },
  {
    date: 'Feb 12',
    Males: 4600,
    Females: 3100,
    collection: 3300,
  },
  {
    date: 'Feb 13',
    Males: 3900,
    Females: 2800,
    collection: 2700,
  },
  {
    date: 'Feb 14',
    Males: 4200,
    Females: 3500,
    collection: 3000,
  },
  {
    date: 'Feb 15',
    Males: 3100,
    Females: 3300,
    collection: 2500,
  },
  {
    date: 'Feb 16',
    Males: 2800,
    Females: 3700,
    collection: 2400,
  },
  {
    date: 'Feb 17',
    Males: 4300,
    Females: 4100,
    collection: 3100,
  },
  {
    date: 'Feb 18',
    Males: 4700,
    Females: 3600,
    collection: 3400,
  },
  {
    date: 'Feb 19',
    Males: 3500,
    Females: 3900,
    collection: 2900,
  },
  {
    date: 'Feb 20',
    Males: 3000,
    Females: 4200,
    collection: 2600,
  },
  {
    date: 'Feb 21',
    Males: 3300,
    Females: 4600,
    collection: 2800,
  },
  {
    date: 'Feb 22',
    Males: 3700,
    Females: 4000,
    collection: 2900,
  },
  {
    date: 'Feb 23',
    Males: 4100,
    Females: 3500,
    collection: 3000,
  },
  {
    date: 'Feb 24',
    Males: 2800,
    Females: 3700,
    collection: 2400,
  },
  {
    date: 'Feb 25',
    Males: 3200,
    Females: 3900,
    collection: 2700,
  },
  {
    date: 'Feb 26',
    Males: 3500,
    Females: 4200,
    collection: 2900,
  },
  {
    date: 'Feb 27',
    Males: 3900,
    Females: 3400,
    collection: 3100,
  },
  {
    date: 'Feb 28',
    Males: 4400,
    Females: 3700,
    collection: 3300,
  },
  {
    date: 'Mar 1',
    Males: 4700,
    Females: 4200,
    collection: 3600,
  },
  {
    date: 'Mar 2',
    Males: 3100,
    Females: 2800,
    collection: 2500,
  },
  {
    date: 'Mar 3',
    Males: 3600,
    Females: 3200,
    collection: 2800,
  },
  {
    date: 'Mar 4',
    Males: 4000,
    Females: 3900,
    collection: 3200,
  },
  {
    date: 'Mar 5',
    Males: 4200,
    Females: 4100,
    collection: 3300,
  },
  {
    date: 'Mar 6',
    Males: 3900,
    Females: 3600,
    collection: 3000,
  },
];
const GenderDataCard = () => {
  // state variables
  const [genderDataTime, setgenderDataTime] = useState("Last 3 months")

  // handler functions
  const genderDataTimeHandler = (e) => {
    setgenderDataTime(e)
  }
  return (
    <div className='w-[100%] h-[50vh] p-6 flex flex-col justify-center items-center bg-zinc-900 border border-zinc-800 rounded-3xl' id='genderDataCard'>
      <div className='w-full flex justify-between items-center'>
        <span className='flex flex-col text-zinc-200'>
          <p className='font-medium text-xl'>Total visitors</p>
          <p className='text-sm opacity-[.56]'>Total visitors for past {`3 months`}</p>
        </span>
        <span className='w-[450px] h-[45px] bg-zinc-900 flex rounded-2xl text-zinc-200 font-medium'>
          <button className={`w-[150px] border-r-2 border-zinc-800 rounded-l-2xl ${genderDataTime === "Last 3 months" ? "bg-zinc-800" : "bg-transparent"} transition-all duration-200`} onClick={() => genderDataTimeHandler("Last 3 months")}>Last 3 months</button>
          <button className={`w-[150px] border-r-2 border-zinc-800 ${genderDataTime === "Last 1 month" ? "bg-zinc-800" : "bg-transparent"} transition-all duration-200`} onClick={() => genderDataTimeHandler("Last 1 month")}>Last 1 month</button>
          <button className={`w-[150px] rounded-r-2xl ${genderDataTime === "Last 7 days" ? "bg-zinc-800" : "bg-transparent"} transition-all duration-200`} onClick={() => genderDataTimeHandler("Last 7 days")}>Last 7 days</button>
        </span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={genderData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#BC37F5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#BC37F5" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#49197D" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#49197D" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" interval={'preserveStartEnd'} minTickGap={33} />
          <Legend />
          <Tooltip contentStyle={{ borderRadius: '15px', fontWeight: 'semibold', backgroundColor: "#181818", border: 'none', paddingRight: '20px', paddingLeft: '20px', paddingTop: '10px', paddingBottom: '10px' }} labelStyle={{ color: '#fff' }} />
          <Area type="monotone" dataKey="Females" stroke="#BC37F5" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="Males" stroke="#49197D" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default GenderDataCard