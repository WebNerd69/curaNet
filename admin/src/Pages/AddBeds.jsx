import React from 'react'
import { useForm } from "react-hook-form";
const AddBeds = () => {
     const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm(
          {
               mode: "onChange",   // validates while typing
               reValidateMode: "onChange", // re-checks on every change
          }
     );

     const submit = (data) => {
          console.log(data);
     }
     const numPat = /^[1-9]*$/;
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
                                   <option value="G-A" className='bg-zinc-900 border-zinc-800 '>General-A</option>
                                   <option value="G-B" className='bg-zinc-900 border-zinc-800 '>General-B</option>
                                   <option value="G-C" className='bg-zinc-900 border-zinc-800 '>General-C</option>

                                   <option value="M-A" className='bg-zinc-900 border-zinc-800 '>Maternity-A</option>
                                   <option value="M-B" className='bg-zinc-900 border-zinc-800 '>Maternity-B</option>
                                   <option value="M-C" className='bg-zinc-900 border-zinc-800 '>Maternity-C</option>

                                   <option value="I-A" className='bg-zinc-900 border-zinc-800 '>ICU-A</option>
                                   <option value="I-B" className='bg-zinc-900 border-zinc-800 '>ICU-B</option>
                                   <option value="I-C" className='bg-zinc-900 border-zinc-800 '>ICU-C</option>

                                   <option value="E-A" className='bg-zinc-900 border-zinc-800 '>Emergency-A</option>
                                   <option value="E-B" className='bg-zinc-900 border-zinc-800 '>Emergency-B</option>
                                   <option value="E-C" className='bg-zinc-900 border-zinc-800 '>Emergency-C</option>
                              </select>
                              
                         </div>
                         <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                              <label htmlFor="n" className='absolute text-sm -top-3 opacity-[.56]'>Number of beds</label>
                              <input
                                   {...register("n", {
                                        required: "Number of beds is required",
                                        minLength: {
                                             value: 1,
                                             message: "Atleast add 1 bed",
                                        },
                                        maxLength: {
                                             value: 2,
                                             message: "You can add upto 99 beds",
                                        },
                                        pattern: {
                                             value: numPat,
                                             message: "It can only contain numbers",
                                        },
                                   })}
                                   id='n'
                                   className='bg-transparent w-full outline-none '
                                   type='number'
                                   placeholder='1' />
                         </div>
                         {errors.n ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.n.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>Number of beds to add</p>}
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
