import React, { useContext, useState } from 'react'
import TableStaff from '../components/TableStaff'
import { AdminContext } from '../context/AdminContext'
import { useForm } from 'react-hook-form';

const ManagePayroll = () => {
  const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, setValue } = useForm(
    {
      mode: "onChange",   // validates while typing
      reValidateMode: "onChange", // re-checks on every change
    }
  );
  const { staffdata } = useContext(AdminContext)
  return (
    <div className='w-full h-[100vh] flex items-center justify-evenly text-zinc-200 relative'>
      <div className='w-[75%] h-full'>
        <TableStaff staffdata={staffdata} selectEmployees={true} />
      </div>
      <div className='w-[25%] h-[40%] rounded-3xl bg-zinc-900 border-2 border-zinc-800'>
        <div className='w-full h-20 flex items-center justify-center font-semibold text-2xl'>
          <p>Manage Payroll</p>
        </div>
        <form className='w-full h-[80%] flex flex-col items-center justify-evenly' onSubmit={handleSubmit((data) => console.log(data))}>
          <div className='w-[80%] flex justify-center py-3  bg-zinc-900 border-2 border-zinc-800 rounded-xl cursor-pointer relative'>
            <label htmlFor="select" className='absolute text-sm -top-3 opacity-[.56] left-2'>Action</label>
            <select {...register("payrollAction")} className='bg-transparent outline-none px-10 cursor-pointer' id='select'>
              <option value="increase" className='bg-zinc-900 border-zinc-800 '>Increase salary</option>
              <option value="decrease" className='bg-zinc-900 border-zinc-800 '>Decrease salary</option>
              {/* <option value="bonus" className='bg-zinc-900 border-zinc-800 '>Bonus</option> */}
            </select>
          </div>
          <div className='w-[80%] flex flex-col gap-1 relative'>
            <label htmlFor="actPercentage" className='absolute text-sm -top-3 opacity-[.56] left-2'>Percentage</label>
            <input
              type="number"
              id="actPercentage"
              {...register("actPercentage",
                {
                  required: "Percentage is required",
                  min: { value: 0, message: "Percentage must be positive" },
                  pattern : {value :/^[1-9][0-9]?$/, message:"percentage must be between 1 and 99"}
                }
              )}
              placeholder='69'
              className='w-full px-5 py-2 rounded-lg bg-zinc-900 border-2 border-zinc-800 outline-none'
               />
            {errors.actPercentage? <p className='text-sm text-red-500'>{errors.actPercentage.message}</p>:
            <p className='text-sm text-zinc-400'>Enter percentage of action</p>}
          </div>
          <button type="submit" disabled={!isValid || isSubmitting} className={`w-[40%] py-2 rounded-lg text-white font-semibold border-2 border-zinc-800 bg-zinc-900 ${!isValid || isSubmitting ? 'cursor-not-allowed text-zinc-500' : ' text-zinc-200'} transition-colors duration-300`}>
            {isSubmitting ? 'Submiting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ManagePayroll