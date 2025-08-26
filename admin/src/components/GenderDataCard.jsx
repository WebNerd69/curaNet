import React, { useContext, useEffect, useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { AdminContext } from '../context/AdminContext';


const GenderDataCard = () => {
  // context
  const { genderData } = useContext(AdminContext)
  // state variables
  const [genderDataTime, setgenderDataTime] = useState("Last 3 months")
  const [filteredData, setFilteredData] = useState(genderData)



  // filter data
  const filterGenderData = (fullDataset, timeFilter, setGenderData) => {
    const currentDate = new Date();
    let filteredData = [];

    if (timeFilter === 'Last 7 days') {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(currentDate.getDate() - 7);

      filteredData = fullDataset.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= sevenDaysAgo && itemDate <= currentDate;
      });
    } else if (timeFilter === 'Last 1 month') {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(currentDate.getMonth() - 1);

      filteredData = fullDataset.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= oneMonthAgo && itemDate <= currentDate;
      });
    } else if (timeFilter === 'Last 3 months') {
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(currentDate.getMonth() - 3);

      filteredData = fullDataset.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= threeMonthsAgo && itemDate <= currentDate;
      });
    } else {
      // Default case for 'all' or any other value
      filteredData = fullDataset;
    }

    // Sort the filtered data by date (ascending)
    filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Set the filtered data using the setter function
    setGenderData(filteredData);

    return filteredData;
  };


  // useEffect
  
  useEffect(() => {
    filterGenderData(genderData, genderDataTime, setFilteredData);
  }, [genderData, genderDataTime]);
  useEffect(() => {
    console.log(filteredData)
  }, [filteredData])

  // handler functions
  const genderDataTimeHandler = (e) => {
    setgenderDataTime(e)
  }
  return (
    <div className='w-[100%] h-[50vh] p-6 flex flex-col justify-center items-center bg-zinc-900 border border-zinc-800 rounded-3xl' id='genderDataCard'>
      <div className='w-full flex justify-between items-center'>
        <span className='flex flex-col text-zinc-200'>
          <p className='font-medium text-xl'>Total visitors</p>
          <p className='text-sm opacity-[.56]'>Total visitors for {genderDataTime}</p>
        </span>
        <span className='w-[450px] h-[45px] bg-zinc-900 flex rounded-2xl text-zinc-200 font-medium'>
          <button className={`w-[150px] border-r-2 border-zinc-800 rounded-l-2xl ${genderDataTime === "Last 3 months" ? "bg-zinc-800" : "bg-transparent"} transition-all duration-200`} onClick={() => genderDataTimeHandler("Last 3 months")}>Last 3 months</button>
          <button className={`w-[150px] border-r-2 border-zinc-800 ${genderDataTime === "Last 1 month" ? "bg-zinc-800" : "bg-transparent"} transition-all duration-200`} onClick={() => genderDataTimeHandler("Last 1 month")}>Last 1 month</button>
          <button className={`w-[150px] rounded-r-2xl ${genderDataTime === "Last 7 days" ? "bg-zinc-800" : "bg-transparent"} transition-all duration-200`} onClick={() => genderDataTimeHandler("Last 7 days")}>Last 7 days</button>
        </span>
      </div>
      <ResponsiveContainer width="100%" height="100%" className='outline-none'>
        <AreaChart data={filteredData} className='outline-none'
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