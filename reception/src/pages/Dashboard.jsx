import React, { useContext } from 'react'
import NumberCard from '../components/NumberCard'
import TableStaff from '../components/TableStaff'
import { ReceptionContext } from '../context/ReceptionContext'

const Dashboard = () => {
  const {doctorList} = useContext(ReceptionContext)


  return (
    <div className='w-[100%] h-[100vh] flex flex-col justify-evenly items-center text-zinc-200 relative'>
      <div className='w-[100%] h-[25%] px-7 py-5 flex justify-between items-center gap-x-5'>
        <NumberCard heading={'Patients registered today'} body={27} lowText={'new patients registered today' } trend={'up'} trendPercent={10}/>
        <NumberCard heading={'Appoimntments booked'} body={17} lowText={'appointments booked today'} trend={'down'} trendPercent={3}/>
        <NumberCard heading={'Pending queue'} body={7} lowText={'patients in the queue'} trend={'down'} trendPercent={1}/>
        <NumberCard heading={'Total patients'} body={169} lowText={'total patients this month'} trend={'up'} trendPercent={15.3}/>
      </div>
      <div className='w-[100%] h-[75%] px-7 py-5'>
        <TableStaff staffdata={doctorList}/>
      </div>
    </div>
  )
}

export default Dashboard
