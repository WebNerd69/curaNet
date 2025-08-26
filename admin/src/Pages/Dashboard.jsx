import React from 'react'
import GenderDataCard from '../components/GenderDataCard';
import NumberCard from '../components/numberCard';
import AgeDataCard from '../components/AgeDataCard';
import Appointments from '../components/Appointments';



const Dashboard = () => {
  

  return (
    <div className='w-full h-full relative flex flex-col items-center py-3 gap-10'>
      <div className='w-full h-[30vh] py-6 flex gap-5'>
        <NumberCard heading={"Total revenue"} trend={"up"} trendPercent={12.6} body={'₹69420'} lowText={"Revenue this month"}/>
        <NumberCard heading={"Total patients"} trend={"down"} trendPercent={6} body={120} lowText={"Patients this month"}/>
        <NumberCard heading={"Average patients per day"} trend={"down"} trendPercent={3} body={15} lowText={"Patients this month"}/>
        <NumberCard heading={"Emergency cases"} trend={"up"} trendPercent={6.8} body={8} lowText={"Emergency cases this month"}/>
      </div>
      <GenderDataCard/>
      <div className='w-full flex items-center mt-6 mb-10 gap-5'>
        <AgeDataCard/>
        <Appointments/>
      </div>
    </div>
  )
}

export default Dashboard