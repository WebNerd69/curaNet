import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
const ReportPage = () => {
     const { _id } = useParams()
     const {userData ,BACKEND_URI} = useContext(UserContext)
     const [reportData,setReportData] = useState()
     const fetchData = async ()=>{
          try {
               const res = await axios.get(`${BACKEND_URI}report/get-report-by-id/${_id}`)
               if(!res.data.success){
                    toast.error("Cannot find report")
                    console.log(res)
               }
               setReportData(res.data.report)
          } catch (error) {
               toast.error("oops something went wrong")
          }
     }

     useEffect(()=>{
          fetchData()
     },[])
     return (
          <div className='w-full h-full p-10 text-white flex flex-col items-center justify-center'>
               {reportData?(<div className='w-full flex-col flex gap-5 items-center gap-y-10'>
                    <div className='w-full md:grid md:grid-cols-[2fr_.5fr_.5fr_2fr] flex flex-col gap-5'>

                         <div className='w-full px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>

                              <label htmlFor="name" className='absolute text-sm -top-3 opacity-[.56]'>Name</label>
                              <p
                                   id="name"
                                   type="text"
                                   className="bg-transparent w-full outline-none"

                              >{reportData.userName}</p>
                         </div>
                         <div className='w-full px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>

                              <label htmlFor="name" className='absolute text-sm -top-3 opacity-[.56]'>age</label>
                              <p
                                   id="name"
                                   className="bg-transparent w-full outline-none"

                              >{userData.age?userData.age:""}</p>
                         </div>
                         <div className='w-full px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>

                              <label htmlFor="name" className='absolute text-sm -top-3 opacity-[.56]'>gender</label>
                              <p
                                   id="name"
                                   className="bg-transparent w-full outline-none"

                              >{userData.gender?userData.age:""}</p>
                         </div>
                         <div className='w-full px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>

                              <label htmlFor="name" className='absolute text-sm -top-3 opacity-[.56]'>Doctor Name</label>
                              <p
                                   id="name"
                                   className="bg-transparent w-full outline-none"

                              >{reportData.doctorName}</p>
                         </div>
                    </div>
                    {/* Textarea */}
                    <div className='w-[100%] flex md:justify-between flex-col md:flex-row gap-5 relative'>
                         <div className='md:w-[70%] w-full min-h-[350px] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                              <label htmlFor="report" className='absolute text-sm -top-3 opacity-[.56]'>Report</label>
                              <p
                                   
                                   className="bg-transparent w-full h-full outline-none resize-none"
                                   placeholder="Enter the report in not more than 5000 characters."
                                   id="report"
                              >{reportData.report}</p>
                         </div>
                         <div className='md:w-[30%] w-full min-h-[350px] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                              <label htmlFor="tests" className='absolute text-sm -top-3 opacity-[.56]'>tests</label>
                              <p
                              
                                   className="bg-transparent w-full h-full outline-none resize-none"
                         
                                   id="tests"
                              >{reportData.tests}</p>
                         </div>
                    </div>


                    <div className='w-[100%] min-h-[350px] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                         <label htmlFor="prescription" className='absolute text-sm -top-3 opacity-[.56]'>Prescription</label>
                         <p
                              className="bg-transparent w-full h-full outline-none resize-none"
                              
                              id="prescription"
                         >{reportData.prescriotion}</p>
                    </div>
                    



               </div>):(
                    <div className='w-full '>
                         <p className='text-center text-white text-xl '>
                              loading...
                         </p>
                    </div>
               )}
          </div>
     )
}

export default ReportPage
