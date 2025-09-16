import React from 'react'
import Bed from '../../components/Bed';
import { useState } from 'react';
import { useContext } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { useEffect } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Beds = () => {

     const {BACKEND_URI} = useContext(DoctorContext)
     const [beds , setBeds] = useState([])


     const fetchBeds = async()=>{
          try {
               const res = await axios.get(`${BACKEND_URI}bed/`)
               console.log(res.data)
               setBeds(res.data)
          } catch (error) {
               console.log(error)
          }
     }

     useEffect(()=>{
          fetchBeds()
     },[BACKEND_URI])
     

     return (
          <div className='w-full h-full relative flex flex-col items-center justify-start gap-y-20 text-zinc-200 py-20 px-10'>

               <div className='w-[90%]'>

                    <div className='w-full min-h-24 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-7'>
                         {
                              beds.filter((bed)=> bed.isOccupied === true).map((bed)=>{
                                   return(<Bed 
                                   key={`${bed.ward}-${bed.bedNumber}`}
                                   ward={bed.ward}
                                   bedNumber={bed.bedNumber}
                                   patientName={bed.patientName}
                                   gender={bed.gender}
                                   userId={bed.patientID}
                                   />)
                              })
                         }

                    </div>
               </div>


          </div>
     )
}

export default Beds
