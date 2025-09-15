import React from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
const RescheduleAppointment = () => {
  // react-hook-forms
  const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, setValue } = useForm(
    {
      mode: "onChange",   // validates while typing
      reValidateMode: "onChange", // re-checks on every change
    }
  );
  const {BACKEND_URI} = useContext(UserContext)
  // submit function
  const submit = async(e) => {
    try {
      const res = await axios.put(`${BACKEND_URI}appointment/reschedule/${e.apt_id}`,
        {
          newDateTime : e.date
        }
      )
      if(!res.data.success){
        toast.error("Oops! something went weong")
      }
      else{
        toast.success("Appointment rescheduled")
      }
    } catch (error) {
      console.log(error)
      toast.error("OOPS! something went wrong")
    }

  }



  const today = new Date().toISOString().split("T")[0];
  return (
    <div className='w-full h-[100vh] relative flex items-center justify-center text-white'>

      <div className='md:w-[35%] md:h-[40%] h-[50%] w-[90%] bg-zinc-900 rounded-3xl flex items-center gap-7 flex-col justify-center'>
        <h1 className='md:text-3xl text-xl font-semibold text-white text-center my-5'>Reschedule Appointment</h1>
        <form onSubmit={handleSubmit(submit)} className='w-full flex-col flex gap-5 items-center'>
          {/* appointment id */}
          <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
            <label htmlFor="apt_id" className='absolute text-sm -top-3 opacity-[.56]'>Apt ID *</label>
            <input
              {...register("apt_id", {
                required: "Apt ID is required"
              })}
              id="apt_id"
              type="text"
              className="bg-transparent w-full outline-none"
              placeholder="apt_a1b1c1"
            />
          </div>
          {errors.apt_id ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.apt_id.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>This is the display name of the patient</p>}
              <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                  <label htmlFor="date" className='absolute text-sm -top-3 opacity-[.56]'>Date *</label>
                  <input
                        {...register("date", {
                           required: "Date is required"
                        })}
                        id='date'
                        className='bg-transparent w-full outline-none text-white '
                        type='date'
                        min={today}/>
               </div>
               <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>Rescheduled appointment date</p>

               {/* submit button */}
               <button
                  type="submit"
                  className='px-7 py-3 border border-zinc-800 rounded-xl font-semibold cursor-pointer disabled:opacity-[.56] disabled:cursor-not-allowed'
                  disabled={!isValid || isSubmitting}
               >
                  {isSubmitting ? "Rescheduling ..." : "Reschedule"}
               </button>
          
        </form>
      </div>


    </div>
  )
}

export default RescheduleAppointment
