import React, { useContext, useEffect, useState } from 'react'
import { ReceptionContext } from '../../context/ReceptionContext'
import AppointmentsTable from '../../components/AppointmentsTable';
import axios from "axios"
const Appointments = () => {
     const [appointmentList , setappointmentList]= useState([])
     const {BACKEND_URI} = useContext(ReceptionContext)
     const fetchData = async ()=>{
          try {
               const res = await axios.get(`${BACKEND_URI}appointment/all`)
               console.log(res)
               if(!res.data.success){
                    console.log(error)
               }
               setappointmentList(res.data.data)
          } catch (error) {
               console.log(error)
          }
     }
     useEffect(()=>{
          fetchData()
     },[])
     return (
          <div className='w-full h-[100vh]'>
               <AppointmentsTable patientData={appointmentList} />
          </div>
     )
}

export default Appointments
