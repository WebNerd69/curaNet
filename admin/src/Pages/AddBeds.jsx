import React from 'react'
import { useForm } from "react-hook-form";
import axios from"axios"
import { useCallback } from 'react';
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import {toast} from "react-toastify"
const AddBeds = () => {

     const {BACKEND_URI,userData,adminToken} = useContext(AdminContext)
     const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm(
          {
               mode: "onChange",   // validates while typing
               reValidateMode: "onChange", // re-checks on every change
          }
     );

     const submit = async(data) => {
          try {
               const res= await axios.post(`${BACKEND_URI}bed/add`,{
                    ward: data.ward,
                    bedNumber : data.n
               },{
                    headers:{
                         token:adminToken,
                         adminemail:userData.email,
                         adminid:userData._id
                    }
               })
               if(!res.data.success){
                    toast.error("Bed already exists")
               }
               toast.success("Bed added successfully")
          } catch (error) {
               console.log(error)
               toast.error("err + "+error.message)
          }
     }
     const numPat = /^[0-9]*$/;
     return (
          <div className='w-full h-full relative flex items-center justify-center text-zinc-200'>
               <div className='w-[40%] h-[70%] bg-zinc-950 border-2 border-zinc-800 rounded-3xl p-5'>
                    {/* title */}
                    <div className='w-full h-24 px-10 py-3 font-semibold text-2xl'>
                         <p>Add new Beds</p>
                         <p className='opacity-[0.56] text-sm font-normal'>Add a new bed to the ward</p>
                    </div>
                    <form onSubmit={handleSubmit(submit)} className='w-full flex-col flex gap-5 items-center justify-center h-[70%]'>
                         <div className='w-[80%] flex items-center px-5 py-3  bg-zinc-900 border-2 border-zinc-800 rounded-xl cursor-pointer relative'>
                              <label htmlFor="w" className='absolute text-sm -top-3 opacity-[.56]'>Ward</label>
                              <select {...register("ward")} className='bg-transparent outline-none w-full cursor-pointer ' id='w'>
                                   <option value="general" className='bg-zinc-900 border-zinc-800 '>General</option>

                                   <option value="maternity" className='bg-zinc-900 border-zinc-800 '>Maternity</option>

                                   <option value="icu" className='bg-zinc-900 border-zinc-800 '>ICU</option>

                                   <option value="emergency" className='bg-zinc-900 border-zinc-800 '>Emergency</option>
                              </select>
                              
                         </div>
                         <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                              <label htmlFor="n" className='absolute text-sm -top-3 opacity-[.56]'>Bed Number</label>
                              <input
                                   {...register("n", {
                                        required: "Number of beds is required",
                                        minLength: {
                                             value: 3,
                                             message: "ex 101",
                                        },
                                        maxLength: {
                                             value: 3,
                                             message: "ex 101",
                                        },
                                        pattern: {
                                             value: numPat,
                                             message: "It can only contain numbers",
                                        },
                                   })}
                                   id='n'
                                   className='bg-transparent w-full outline-none '
                                   type='number'
                                   placeholder='101' />
                         </div>
                         {errors.n ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.n.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>bedNumber</p>}
                         {/* submit button */}
                         <button
                              type="submit"
                              className='px-7 py-3 border border-zinc-800 rounded-xl font-semibold cursor-pointer disabled:opacity-[.56] disabled:cursor-not-allowed'
                              disabled={!isValid || isSubmitting}
                         >
                              {isSubmitting ? "Adding Beds ..." : "Add Beds"}
                         </button>
                    </form>
               </div>
          </div>
     )
}

export default AddBeds
