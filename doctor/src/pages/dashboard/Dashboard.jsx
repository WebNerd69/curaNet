import React from 'react'
import NumberCard from '../../components/NumberCard'
import ShiftCard from '../../components/ShiftCard'
import AppointmentCard from '../../components/AppointmentCard'

const Dashboard = () => {
     return (
          <div className='w-full h-full relative p-10'>
               <div className='w-full h-[30vh] flex gap-5'>
                    <NumberCard heading={"Pending appointments"} body={5} trend={"up"} trendPercent={2} lowText={'pending appointments today'} />
                    <NumberCard heading={"Total appointments"} body={15} trend={"up"} trendPercent={2} lowText={"total appointmets today"} />
                    <NumberCard heading={"Total patients"} trend={"up"} trendPercent={3} body={156} lowText={"total patients this month "} />
                    <ShiftCard />
               </div>
               <p className='text-white py-5 text-xl opacity-[.56]'>Appointments</p>
               <div className='w-full h-[55vh] mt-5 overflow-y-auto flex flex-col gap-y-10'>
                    <AppointmentCard gender={"male"} name={"Rudra Pratap Roy"} age={18} phone={"9775270246"} status={"pending"}/>
               </div>
          </div>
     )
}

export default Dashboard
