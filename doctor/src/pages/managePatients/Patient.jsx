import React from 'react'
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { DoctorContext } from '../../context/DoctorContext';
import axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';
import {toast } from "react-toastify"
const Patient = () => {
     const { userId } = useParams()
     const {BACKEND_URI , userData , doctorToken} = useContext(DoctorContext)
     // react-hook-forms
     const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, setValue } = useForm(
          {
               mode: "onChange",   // validates while typing
               reValidateMode: "onChange", // re-checks on every change
          }
     );
     const [isLoading , setIsLoading] = useState(true)
     const [userFound,setUserFound] = useState()
     const [patientData, setPatientData] = useState()

     const fetchPatientData = async()=>{
          // console.log(id)
          try {
               const res = await axios.get(`${BACKEND_URI}user/${userId}`)
               console.log("response",res.data)
               if(!res.data.success){
                    setIsLoading(false)
                    setUserFound(false)
               }
               setUserFound(true)
               setIsLoading(false)
               setPatientData(res.data.user)
          } catch (error) {
               setIsLoading(false)
               console.log(error)               
          }
     }
     const setRegisterData =()=>{
          try {
               setValue("userId",userId)
               setValue("userName",patientData.name)
               setValue("doctorId",userData._id)
               setValue("doctorName",userData.name)
          } catch (error) {
               console.log(error)
          }
     }
     useEffect(()=>{
          fetchPatientData()
     },[])
     useEffect(()=>{
          setRegisterData()
     },[userFound])
     // submit function
     const submit = async(e) => {
          console.log(e)
          try {
               const res = await axios.post(`${BACKEND_URI}report/create-report`,{
                    userId:e.userId,
                    userName:e.userName,
                    doctorId:e.doctorId,
                    doctorName:e.doctorName,
                    report:e.report,
                    prescription:e.prescription,
                    tests:e.tests

               },{
                    headers:{
                         doctorid:userData._id,
                         token:doctorToken,
                         doctoremail:userData.email
                    }
               })
               if(!res.data.success){
                    toast.error(res.data.message)
               }
               toast.success("Report added successfully")
          } catch (error) {
               console.log(error)
          }
     }

     if(isLoading){
          return(
               <div className='w-full h-full bg-zinc-950 text-white flex justify-center items-center text-xl'>
                    <p>Loading ...</p>
               </div>
          )
     }

     return (
          <div className='w-full h-full p-10 text-white flex flex-col'>
               {userFound?(<form onSubmit={handleSubmit(submit)} className='w-full flex-col flex gap-5 items-center gap-y-10'>
                    <div className='w-full grid grid-cols-[2fr_.5fr_.5fr_1fr] gap-5'>

                         <div className='w-full px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>

                              <label htmlFor="name" className='absolute text-sm -top-3 opacity-[.56]'>Name</label>
                              <p
                                   id="name"
                                   type="text"
                                   className="bg-transparent w-full outline-none"

                              >{patientData.name}</p>
                         </div>
                         <div className='w-full px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>

                              <label htmlFor="name" className='absolute text-sm -top-3 opacity-[.56]'>Age</label>
                              <p
                                   id="name"
                                   className="bg-transparent w-full outline-none"

                              >{patientData.age}</p>
                         </div>
                         <div className='w-full px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>

                              <label htmlFor="name" className='absolute text-sm -top-3 opacity-[.56]'>Gender</label>
                              <p
                                   id="name"
                                   className="bg-transparent w-full outline-none"

                              >{patientData.gender}</p>
                         </div>
                         <div className='w-full px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>

                              <label htmlFor="name" className='absolute text-sm -top-3 opacity-[.56]'>Phone number</label>
                              <p
                                   id="name"
                                   className="bg-transparent w-full outline-none"

                              >{patientData.phone}</p>
                         </div>
                    </div>
                    {/* Textarea */}
                    <div className='w-[100%] flex justify-between gap-5 relative'>
                         <div className='w-[70%] min-h-[350px] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                              <label htmlFor="report" className='absolute text-sm -top-3 opacity-[.56]'>Report</label>
                              <textarea
                                   {...register("report", {
                                        required: "Report is required",
                                        minLength: {
                                             value: 10,
                                             message: "Report must be at least 10 characters",
                                        },
                                        maxLength: {
                                             value: 5000,
                                             message: "Report must be less than 5000 characters",
                                        },
                                   })}
                                   className="bg-transparent w-full h-full outline-none resize-none"
                                   placeholder="Enter the report in not more than 5000 characters."
                                   id="report"
                              />
                         </div>
                         <div className='w-[30%] min-h-[350px] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                              <label htmlFor="tests" className='absolute text-sm -top-3 opacity-[.56]'>tests</label>
                              <textarea
                                   {...register("tests", {

                                   })}
                                   className="bg-transparent w-full h-full outline-none resize-none"
                                   placeholder="Write the name of the tests to be conducted."
                                   id="tests"
                              />
                         </div>
                    </div>
                    {errors.report && <p className='text-sm text-red-500 -mt-3 w-[100%]'>{errors.report.message}</p>}

                    <div className='w-[100%] min-h-[350px] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                         <label htmlFor="prescription" className='absolute text-sm -top-3 opacity-[.56]'>Prescription</label>
                         <textarea
                              {...register("prescription", {
                                   required: "prescription is required",
                                   minLength: {
                                        value: 10,
                                        message: "prescription must be at least 10 characters",
                                   },
                                   maxLength: {
                                        value: 5000,
                                        message: "prescription must be less than 5000 characters",
                                   },
                              })}
                              className="bg-transparent w-full h-full outline-none resize-none"
                              placeholder="Write the prescription in not more than 5000 characters."
                              id="prescription"
                         />
                    </div>
                    {errors.prescription && <p className='text-sm text-red-500 -mt-3 w-[100%]'>{errors.prescription.message}</p>}
                    <button
                         type="submit"
                         className='px-7 py-3 border border-zinc-800 rounded-xl font-semibold cursor-pointer disabled:opacity-[.56] disabled:cursor-not-allowed'
                         disabled={!isValid || isSubmitting}
                    >
                         {isSubmitting ? "Submitting ..." : "Submit"}
                    </button>

                              


               </form>):
               (
                    <div className='w-full h-full flex items-center justify-center text-white text-xl font-semibold'>
                         <p>
                              User not found...
                         </p>
                    </div>
               )}
          </div>
     )
}

export default Patient
