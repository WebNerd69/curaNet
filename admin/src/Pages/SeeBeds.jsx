import React from 'react'
import Bed from '../components/Bed';
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';
const SeeBeds = () => {
     const {BACKEND_URI} = useContext(AdminContext)

     const [beds,setBeds] = useState([])

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
     },[])
     

     return (
          <div className='w-full h-full relative flex flex-col items-center justify-evenly gap-y-20 text-zinc-200 p-10'>

               <div className='w-[90%]'>
                    <p className='text-lg px-5 mb-5 font-semibold'>
                         General Ward
                    </p>
                    <div className='w-full min-h-24 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-7'>
                         {
                              Array.isArray(beds) && beds.filter((bed)=> bed.ward.includes("general")).map((bed)=>{
                                   return(<Bed 
                                   key={`${bed.ward}-${bed.bedNumber}`}
                                   ward={bed.ward}
                                   bedNumber={bed.bedNumber}
                                   patientName={bed.patientName}
                                   isOccupied={bed.isOccupied}
                                   gender={bed.gender}
                                   id={bed._id}
                                   />)
                              })
                         }

                    </div>
               </div>
               <div className='w-[90%]'>
                    <p className='text-lg px-5 mb-5 font-semibold'>
                         Maternity Ward
                    </p>
                    <div className='w-full min-h-24 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-7'>
                         {
                              Array.isArray(beds) && beds.filter((bed)=> bed.ward.includes("maternity")).map((bed)=>{
                                   return(<Bed 
                                   key={`${bed.ward}-${bed.bedNumber}`}
                                   ward={bed.ward}
                                   bedNumber={bed.bedNumber}
                                   patientName={bed.patientName}
                                   isOccupied={bed.isOccupied}
                                   gender={bed.gender}
                                   id={bed._id}
                                   />)
                              })
                         }

                    </div>
               </div>
               <div className='w-[90%]'>
                    <p className='text-lg px-5 mb-5 font-semibold'>
                         ICU Ward
                    </p>
                    <div className='w-full min-h-24 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-7'>
                         {
                              Array.isArray(beds) && beds.filter((bed)=> bed.ward.includes("icu")).map((bed)=>{
                                   return(<Bed 
                                   key={`${bed.ward}-${bed.bedNumber}`}
                                   ward={bed.ward}
                                   bedNumber={bed.bedNumber}
                                   patientName={bed.patientName}
                                   isOccupied={bed.isOccupied}
                                   gender={bed.gender}
                                   id={bed._id}
                                   />)
                              })
                         }

                    </div>
               </div>
               <div className='w-[90%]'>
                    <p className='text-lg px-5 mb-5 font-semibold'>
                         Emergency Ward
                    </p>
                    <div className='w-full min-h-24 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-7'>
                         {
                              Array.isArray(beds) && beds.filter((bed)=> bed.ward.includes("emergency")).map((bed)=>{
                                   return(<Bed 
                                   key={`${bed.ward}-${bed.bedNumber}`}
                                   ward={bed.ward}
                                   bedNumber={bed.bedNumber}
                                   patientName={bed.patientName}
                                   isOccupied={bed.isOccupied}
                                   gender={bed.gender}
                                   id={bed._id}
                                   />)
                              })
                         }

                    </div>
               </div>


          </div>
     )
}

export default SeeBeds
