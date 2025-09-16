import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { ReceptionContext } from '../../context/ReceptionContext';
import { toast } from 'react-toastify';
import axios from 'axios';
const BookAppointment = () => {
   // react-hook-forms
   const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, setValue } = useForm(
      {
         mode: "onChange",   // validates while typing
         reValidateMode: "onChange", // re-checks on every change
      }
   );

   const {BACKEND_URI} = useContext(ReceptionContext)

   // submit function
   const submit = async(e) => {
      try {
         console.log(e)
         const res = await axios.post(`${BACKEND_URI}appointment/create`,{
            userId:e.id,
            userName:e.name,
            doctorName: e.doctor_name,
            doctorId: e.did,
            dateTime : e.date,
            gender: e.gender,
            phone : e.phone,
            age : e.age,
            case:e.case
         })

         console.log(res)
         if(!res.data.success){
            toast.error("Something went wrong")
         }
         toast.success("Appointment booked")
      } catch (error) {
         toast.error(error.message)
      }

   }


   // variables
   const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
   const phonePattern = /^[0-9]{10}$/;
   const agePattern = /^[0-9]{1,3}$/;

   const today = new Date().toISOString().split("T")[0];
   return (
      <div className='w-full h-[100vh] relative flex items-center justify-center'>

         <div className='w-[35%] h-[85%] bg-zinc-900 rounded-3xl flex items-center gap-7 flex-col justify-center'>
            <h1 className='text-3xl font-semibold text-white text-center my-5'>Book Appointment</h1>
            <form onSubmit={handleSubmit(submit)} className='w-full flex-col flex gap-5 items-center'>
               {/* name of the Patient */}
               <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                  <label htmlFor="name" className='absolute text-sm -top-3 opacity-[.56]'>Name *</label>
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
               {errors.name ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.name.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>This is the display name of the patient</p>}

               {/* patient id */}
               <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                  <label htmlFor="id" className='absolute text-sm -top-3 opacity-[.56]'>Patient ID *</label>
                  <input
                     {...register("id", {
                        required: "id is required"
                     })}
                     id="id"
                     type="text"
                     className="bg-transparent w-full outline-none"
                     placeholder="d46a4d5a4fa4a4w6"
                  />
               </div>
               {errors.id ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.id.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>patient ID</p>}

               {/* patient id */}
               <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                  <label htmlFor="did" className='absolute text-sm -top-3 opacity-[.56]'>Doctor ID *</label>
                  <input
                     {...register("did", {
                        required: "Doctor id is required"
                     })}
                     id="did"
                     type="text"
                     className="bg-transparent w-full outline-none"
                     placeholder="dasda6d56ad6da48"
                  />
               </div>
               {errors.did ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.did.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>doctor ID</p>}

               {/* name of the Patient */}
               <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                  <label htmlFor="doctor_name" className='absolute text-sm -top-3 opacity-[.56]'>Doctor name *</label>
                  <input
                     {...register("doctor_name", {
                        required: "Doctor name is required",
                        minLength: {
                           value: 3,
                           message: "Doctor name must be at least 3 characters",
                        },
                        maxLength: {
                           value: 50,
                           message: "Doctor name must be less than 50 characters",
                        },
                        pattern: {
                           value: namePattern,
                           message: "Doctor name can only contain letters and spaces",
                        },
                     })}
                     id="doctor_name"
                     type="text"
                     className="bg-transparent w-full outline-none"
                     placeholder="Tony Tony Chopper"
                  />
               </div>
               {errors.doctor_name ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.doctor_name.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>Doctor's name</p>}

               {/* patient phone */}
               <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                  <label htmlFor="phone" className='absolute text-sm -top-3 opacity-[.56]'>Phone *</label>
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
               {errors.phone ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.phone.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>Active phone number</p>}


               <div className='w-[80%] flex gap-4 justify-between'>
                  {/* patient gender */}
                  <div className='w-[33%] flex justify-center px-5 py-3  bg-zinc-900 border-2 border-zinc-800 rounded-xl cursor-pointer relative'>
                     <label htmlFor="gender" className='absolute text-sm -top-3 opacity-[.56] left-5'>Gender *</label>
                     <select {...register("gender")} className='bg-transparent outline-none px-5 cursor-pointer '>
                        <option value="male" className='bg-zinc-900 border-zinc-800 '>male</option>
                        <option value="female" className='bg-zinc-900 border-zinc-800 '>female</option>
                        <option value="other" className='bg-zinc-900 border-zinc-800 '>other</option>
                     </select>
                  </div>

                  <div className='w-[33%] flex justify-center px-5 py-3  bg-zinc-900 border-2 border-zinc-800 rounded-xl cursor-pointer relative'>
                     <label htmlFor="case" className='absolute text-sm -top-3 opacity-[.56] left-5'>case *</label>
                     <select {...register("case")} className='bg-transparent outline-none px-5 cursor-pointer '>
                        <option value="general" className='bg-zinc-900 border-zinc-800 '>general</option>
                        <option value="maternity" className='bg-zinc-900 border-zinc-800 '>maternity</option>
                        <option value="emergency" className='bg-zinc-900 border-zinc-800 '>emergency</option>
                     </select>
                  </div>

                  {/* patient age */}
                  <div className='w-[33%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                     <label htmlFor="age" className='absolute text-sm -top-3 opacity-[.56]'>Age *</label>
                     <input
                        {...register("age", {
                           required: "Age is required",
                           minLength: {
                              value: 1,
                              message: "Age must be at least 1 digits",
                           },
                           maxLength: {
                              value: 2,
                              message: "Age must be at most 2 digits",
                           },
                           pattern: {
                              value: agePattern,
                              message: "Age can only contain numbers",
                           },
                        })}
                        id='age'
                        className='bg-transparent w-full outline-none '
                        type='number'
                        placeholder='14' />
                  </div>
               </div>

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

               {/* submit button */}
               <button
                  type="submit"
                  className='px-7 py-3 border border-zinc-800 rounded-xl font-semibold cursor-pointer disabled:opacity-[.56] disabled:cursor-not-allowed'
                  disabled={!isValid || isSubmitting}
               >
                  {isSubmitting ? "Booking ..." : "Book"}
               </button>
            </form>
         </div>

      </div>
   )
}

export default BookAppointment
