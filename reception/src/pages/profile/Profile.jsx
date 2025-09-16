import { Eye, EyeClosed, Rotate3D } from 'lucide-react';
import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ReceptionContext } from '../../context/ReceptionContext';

const Profile = () => {
     const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, setValue } = useForm(
          {
               mode: "onChange",   // validates while typing
               reValidateMode: "onChange", // re-checks on every change
          }
     );

     const { userData} = useContext(ReceptionContext)


     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
     const phonePattern = /^[0-9]{10}$/;
     const agePattern = /^[0-9]{1,3}$/;

     useEffect(() => {
          setValue("name", userData.name)
          setValue("email", userData.email)
          setValue("phone", userData.phone)
     }, [userData])


     return (
          <div className='w-full h-full flex items-center justify-center text-zinc-200 relative flex-col gap-y-10 py-5'>
               <div className='md:w-[50%] w-[90%] md:h-[50%] h-[90%] border-2 rounded-3xl flex flex-col border-zinc-800 justify-center items-center py-5 '>
                    <p className='text-3xl py-5 h-[20%] font-medium'>Profile</p>
                    <form  className='w-full h-[60%] flex-col flex gap-6 items-center '>

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
                                   placeholder="Rudra Pratap Roy"
                                   value={userData.name}
                                   disabled
                              />
                         </div>
                         <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>Display name</p>

                         <div className='w-[80%] flex justify-between flex-col md:flex-row items-center gap-x-5'>

                              <div className='w-full gap-y-5 flex flex-col '>

                                   <div className='w-[100%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
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
                                             placeholder='rroy64330@gmail.com'
                                             value={userData.email ? userData.email : ""}
                                             disabled
                                        />

                                   </div>
                                   <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>display email</p>

                              </div>
                              <div className='w-full flex flex-col gap-y-5'>

                                   <div className='w-[100%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
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
                                             placeholder='9775270246'
                                        // value={'9775270246'}
                                        // disabled
                                        />
                                   </div>
                                   <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>Active phone number</p>

                              </div>
                         </div>

                         {/* <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                              <label htmlFor="emergency-phone" className='absolute text-sm -top-3 opacity-[.56]'>Emergency phone</label>
                              <input
                                   {...register("emergencyContact", {
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
                                   id='emergency-phone'
                                   className='bg-transparent w-full outline-none '
                                   type='tel'
                                   placeholder='9775270246' disabled/>
                                   
                         </div> */}
                         {/* {errors.emergencyContact ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.emergencyContact.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>Emergency phone number</p>} */}

                         {/* <div className='w-[80%] flex gap-4 justify-between flex-col md:flex-row'> */}
                              {/* patient gender
                              <div className='md:w-[33%] flex justify-center px-5 py-3  bg-zinc-900 border-2 border-zinc-800 rounded-xl cursor-pointer relative'>
                                   <label htmlFor="gender" className='absolute text-sm -top-3 opacity-[.56] left-5'>Gender *</label>
                                   <select {...register("gender")} className='bg-transparent outline-none px-5 cursor-pointer '>
                                        <option value="male" className='bg-zinc-900 border-zinc-800 '>male</option>
                                        <option value="female" className='bg-zinc-900 border-zinc-800 '>female</option>
                                        <option value="other" className='bg-zinc-900 border-zinc-800 '>other</option>
                                   </select>
                              </div> */}
                              {/* blood group */}
                              {/* <div className='md:w-[33%] flex justify-center px-5 py-3  bg-zinc-900 border-2 border-zinc-800 rounded-xl cursor-pointer relative'>
                                   <label htmlFor="blood-group" className='absolute text-sm -top-3 opacity-[.56] left-5'>Blood Group *</label>
                                   <select {...register("bloodGroup")} className='bg-transparent outline-none px-5 cursor-pointer '>
                                        <option value="A+" className='bg-zinc-900 border-zinc-800 '>A+</option>
                                        <option value="B+" className='bg-zinc-900 border-zinc-800 '>B+</option>
                                        <option value="AB+" className='bg-zinc-900 border-zinc-800 '>AB+</option>
                                        <option value="O+" className='bg-zinc-900 border-zinc-800 '>O+</option>
                                        <option value="A-" className='bg-zinc-900 border-zinc-800 '>A-</option>
                                        <option value="B-" className='bg-zinc-900 border-zinc-800 '>B-</option>
                                        <option value="AB-" className='bg-zinc-900 border-zinc-800 '>AB-</option>
                                        <option value="O-" className='bg-zinc-900 border-zinc-800 '>O-</option>
                                   </select>
                              </div> */}

                              {/* <div className='md:w-[33%] px-5 py-3 flex items-center justify-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
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
                                        id='phone'
                                        className='bg-transparent w-full outline-none '
                                        type='number'
                                        placeholder='14' />
                              </div> */}
                         {/* </div> */}
                         {/* Textarea
                         <div className='w-[80%] h-[15vh] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                              <label htmlFor="address" className='absolute text-sm -top-3 opacity-[.56]'>Patient's address *</label>
                              <textarea
                                   {...register("address", {
                                        required: "patient's address is required",
                                        minLength: {
                                             value: 25,
                                             message: "Patient's address must be at least 25 characters",
                                        },
                                        maxLength: {
                                             value: 500,
                                             message: "Patient's address must be less than 500 characters",
                                        },
                                   })}
                                   className="bg-transparent w-full h-full outline-none resize-none"
                                   placeholder="Enter the patient's address in not more than 500 characters."
                                   id="address"
                              />
                         </div>
                         {errors.address && <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.address.message}</p>} */}

                         {/* submit button
                         <button
                              type="submit"
                              className='px-7 py-3 border border-zinc-800 rounded-xl font-semibold cursor-pointer disabled:opacity-[.56] disabled:cursor-not-allowed'
                              disabled={!isValid || isSubmitting}
                         >
                              {isSubmitting ? "Updating profile ..." : "Update"}
                         </button> */}
                    </form>
               </div>
          </div>
     )
}

export default Profile
