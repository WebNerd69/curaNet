import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
const AddStaff = () => {
  // react-hook-forms
  const { register, handleSubmit, formState: { errors, isValid , isSubmitting } ,setValue } = useForm(
    {
      mode: "onChange",   // validates while typing
      reValidateMode: "onChange", // re-checks on every change
    }
  );

  // useState
  const [disableSpecialization, setDisableSpecialization] = useState(false)

  // submit function
  const submit = (e) => {
    console.log(e)

  }

    // Reset specialization when disabled
  useEffect(() => {
    if (disableSpecialization) {
      setValue("specialization", ""); // set to null/empty string
    }else{
      setValue("specialization", "general physician"); // set to default value
    }
  }, [disableSpecialization, setValue]);

  // onchane function
  const handleDisableSpecialization = (e) => {
    if (e.target.value === "doctor") {
      setDisableSpecialization(false)
    } else {
      setDisableSpecialization(true)
    }

  }

  // variables
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  const phonePattern = /^[0-9]{10}$/;

  return (
    <div className='w-full h-full relative flex items-center justify-center text-zinc-200'>
      <div className='w-[50%] h-[70%] bg-zinc-950 border-2 border-zinc-800 rounded-3xl p-5'>
        {/* title */}
        <div className='w-full h-24 px-10 py-3 font-semibold text-2xl'>
          <p>Add new staff</p>
          <p className='opacity-[0.56] text-sm font-normal'>Add a new member to the crew</p>
        </div>
        <form onSubmit={handleSubmit(submit)} className='w-full flex-col flex gap-5 items-center'>
          {/* name of the staff */}
          <div className='w-[60%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
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
              placeholder="Rudra Pratap Roy"
            />
          </div>
          {errors.name ? <p className='text-sm text-red-500 -mt-3 w-[60%]'>{errors.name.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[60%]'>This is the display name</p>}

          {/* staff email */}
          <div className='w-[60%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
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
                  message: "Email can only contain letters and spaces",
                },
              })}
              id='email'
              type='email'
              className='bg-transparent w-full outline-none '
              placeholder='rroy64330@gmail.com' />
          </div>
          c

          {/* staff phone */}
          <div className='w-[60%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
            <label htmlFor="phone" className='absolute text-sm -top-3 opacity-[.56]'>Phone</label>
            <input
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be at 10 digits",
                },
                maxLength: {
                  value: 10,
                  message: "Phone number must be 10 digits",
                },
                pattern: {
                  value: phonePattern,
                  message: "Phone number can only contain numbers",
                },
              })}
              id='phone'
              className='bg-transparent w-full outline-none '
              type='tel'
              placeholder='9775270246' />
          </div>
          {errors.phone ? <p className='text-sm text-red-500 -mt-3 w-[60%]'>{errors.phone.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[60%]'>Active phone number</p>}

          {/* staff gender */}
          <div className='w-[60%] flex gap-4 justify-between'>
            <div className='w-[50%] flex justify-center px-5 py-3  bg-zinc-900 border-2 border-zinc-800 rounded-xl cursor-pointer'>
              <select {...register("gender")} className='bg-transparent outline-none px-10 cursor-pointer '>
                <option value="male" className='bg-zinc-900 border-zinc-800 '>male</option>
                <option value="female" className='bg-zinc-900 border-zinc-800 '>female</option>
                <option value="other" className='bg-zinc-900 border-zinc-800 '>other</option>
              </select>
            </div>

            {/* staff role */}
            <div className='w-[50%] flex justify-center px-5 py-3  bg-zinc-900 border-2 border-zinc-800 rounded-xl cursor-pointer'>
              <select {...register("role")} className='bg-transparent outline-none px-7 cursor-pointer' onChange={(e) => { handleDisableSpecialization(e) }}>
                <option value="doctor" className='bg-zinc-900 border-zinc-800 '>Doctor</option>
                <option value="nurse" className='bg-zinc-900 border-zinc-800 '>Nurse</option>
                <option value="receptionist" className='bg-zinc-900 border-zinc-800 '>Receptionist</option>
                <option value="janitor" className='bg-zinc-900 border-zinc-800 '>Janitor</option>
                <option value="admin" className='bg-zinc-900 border-zinc-800 '>Admin</option>
              </select>
            </div>
          </div>

          {/* doctor specialization */}
          <div className='w-[60%] flex justify-center py-3 px-5 bg-zinc-900 border-2 border-zinc-800 rounded-xl cursor-pointer'>
            <select 
            {...register("specialization")}
             className='bg-transparent outline-none px-7 w-full cursor-pointer disabled:cursor-not-allowed'
              disabled={disableSpecialization}
              defaultValue={"general physician"}
              >
              <option value="general physician" className='bg-zinc-900 border-zinc-800'>General Physician</option>
              <option value="cardiologist" className='bg-zinc-900 border-zinc-800'>Cardiologist</option>
              <option value="neurologist" className='bg-zinc-900 border-zinc-800'>Neurologist</option>
              <option value="orthopedic" className='bg-zinc-900 border-zinc-800'>Orthopedic</option>
              <option value="pediatrician" className='bg-zinc-900 border-zinc-800'>Pediatrician</option>
              <option value="psychiatrist" className='bg-zinc-900 border-zinc-800'>Psychiatrist</option>
              <option value="dermatologist" className='bg-zinc-900 border-zinc-800'>Dermatologist</option>
              <option value="oncologist" className='bg-zinc-900 border-zinc-800'>Oncologist</option>
              <option value="gynecologist" className='bg-zinc-900 border-zinc-800'>Gynecologist</option>
              <option value="ophthalmologist" className='bg-zinc-900 border-zinc-800'>Ophthalmologist</option>
            </select>
          </div>
          <p className='text-sm opacity-[.56] -mt-3 w-[60%]'>Doctor's specialzation</p>

          {/* submit button */}
          <button
            type="submit"
            className='px-7 py-3 border border-zinc-800 rounded-xl font-semibold cursor-pointer disabled:opacity-[.56] disabled:cursor-not-allowed'
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ?"Adding Staff ...":"Add Staff"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddStaff