import React from 'react'
import NumberCard from '../../components/NumberCard'
import ShiftCard from '../../components/ShiftCard'
import AppointmentCard from '../../components/AppointmentCard'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'

const Dashboard = () => {

     

     const { userData, doctorToken, BACKEND_URI, appointments, setAppointments } = useContext(DoctorContext)

     const [apt, setApt] = useState(appointments)
     const today = new Date().toISOString().split("T")[0];
     const fetchAppointments = async () => {
          try {
               const res = await axios.get(`${BACKEND_URI}appointment/doctor/${userData._id}`)
               // console.log(res)
               if (!res.data.success){console.log(res.data.message)}
                    
               setAppointments(res.data.data)
               console.log(res.data.data)
               setApt(
                    res.data.data.filter((apt) => {
                         const aptDate = apt.dateTime.split("T")[0];
                         return aptDate === today && apt.status.toLowerCase() !== "cancelled";
                    })
               );
               // console.log(res.data.data)
          } catch (error) {
               console.log(error)
          }
     }
     useEffect(() => {
          fetchAppointments()
          console.log(apt)
     }, [userData])

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
                    {
                         apt.map((item, index) => {
                              return (
                                   <AppointmentCard gender={item.gender} name={item.userName} age={item.age} phone={item.phone} status={item.status} key={index} id={item._id} />
                              )
                         })
                    }

               </div>
          </div>
     )
}

export default Dashboard
