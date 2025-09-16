import React from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { toast } from 'react-toastify';
const FireStaff = () => {
  const { handleSubmit, register, formState: { errors, isSubmitting, isValid } } = useForm(
    {
      mode: "onChange",   // validates while typing
      reValidateMode: "onChange", // re-checks on every change
    }
  );

  const {BACKEND_URI,adminToken,userData,setStaffdata,staffdata} = useContext(AdminContext)

  // functions
  const submit = async(data) => {
    console.log(userData , adminToken)
    try {
      const res = await axios.delete(`${BACKEND_URI}staff/fire/${data.id}`,
        {
          data:{},
          headers:{
            token:adminToken,
            adminemail:userData.email,
            adminid:userData._id
          }
        }
      )
      if(!res.data.success){
        toast.error(res.data.message)
      }
      toast.success("Staff fired successfully😤😤😤")
      console.log(res.data)
      setStaffdata(prevStaff =>
    prevStaff.filter(staff => staff.email !== res.data.updatedStaff.email)
  );
    } catch (error) {
      toast.error(error.message)
    }
  }


  // constant variables
  const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return (
    <div className='w-full h-full relative flex items-center justify-center text-zinc-200'>
      <div className='w-[40%] h-[70%] bg-zinc-950 border-2 border-zinc-800 rounded-3xl p-5'>
        {/* title */}
        <div className='w-full h-24 px-10 py-3 font-semibold text-2xl'>
          <p>Fire staff</p>
          <p className='opacity-[0.56] text-sm font-normal'>Remove a member from the crew</p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit(submit)} className='w-full h-[80%] flex-col flex gap-5 items-center'>
          {/* Name */}
          <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
            <label htmlFor="name" className='absolute text-sm -top-3 opacity-[.56]'>Name</label>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Name must be less than 50 characters",
                },
                pattern: {
                  value: namePattern,
                  message: "Name can only contain letters and spaces",
                },
              })}
              id="name"
              type="text"
              className="bg-transparent w-full outline-none"
              placeholder="Dr. Hogback"
            />
          </div>
          {errors.name
            ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.name.message}</p>
            : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>This is the display name</p>
          }

          {/* Email
          <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
            <label htmlFor="email" className='absolute text-sm -top-3 opacity-[.56]'>Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                minLength: {
                  value: 15,
                  message: "Email must be at least 15 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Email must be less than 50 characters",
                },
                pattern: {
                  value: emailPattern,
                  message: "Invalid email address",
                },
              })}
              id="email"
              type="email"
              className='bg-transparent w-full outline-none'
              placeholder='codingpaglu@gmail.com'
            />
          </div>
          {errors.email
            ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.email.message}</p>
            : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>Work email</p>
          } */}
          {/* id */}
          <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
            <label htmlFor="id" className='absolute text-sm -top-3 opacity-[.56]'>id</label>
            <input
              {...register("id", {
                required: "id is required",
              })}
              id="id"
              type="id"
              className='bg-transparent w-full outline-none'
              placeholder='d1s5d11sdad51d5'
            />
          </div>
          {errors.id
            ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.id.message}</p>
            : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>Staff id</p>
          }

          {/* Textarea */}
          <div className='w-[80%] h-[50%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
            <label htmlFor="fire" className='absolute text-sm -top-3 opacity-[.56]'>Reason for termination</label>
            <textarea
              {...register("fire", {
                required: "Reason for termination is required",
                minLength: {
                  value: 10,
                  message: "Reason for termination must be at least 10 characters",
                },
                maxLength: {
                  value: 500,
                  message: "Reason for termination must be less than 500 characters",
                },
              })}
              className="bg-transparent w-full h-full outline-none resize-none"
              placeholder="Enter the reason for termination in not more than 500 characters."
              id="fire"
            />
          </div>
          {errors.fire && <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.fire.message}</p>}


          {/* submit button */}
          <button
            type="submit"
            className='px-7 py-3 border border-zinc-800 rounded-xl font-semibold cursor-pointer disabled:opacity-[.56]'
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? "Fireing Staff ..." : "Fire Staff"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default FireStaff