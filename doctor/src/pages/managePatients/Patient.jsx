import React from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Patient = () => {
     const { id } = useParams()
     // react-hook-forms
     const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, setValue } = useForm(
          {
               mode: "onChange",   // validates while typing
               reValidateMode: "onChange", // re-checks on every change
          }
     );

     // submit function
     const submit = (e) => {
          console.log(e)
     }

     return (
          <div className='w-full h-full p-10 text-white flex flex-col'>
               <form onSubmit={handleSubmit(submit)} className='w-full flex-col flex gap-5 items-center gap-y-10'>
                    <div className='w-full grid grid-cols-[2fr_.5fr_.5fr_1fr] gap-5'>

                         <div className='w-full px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>

                              <label htmlFor="name" className='absolute text-sm -top-3 opacity-[.56]'>Name</label>
                              <p
                                   id="name"
                                   type="text"
                                   className="bg-transparent w-full outline-none"

                              >Rudra Pratap Roy </p>
                         </div>
                         <div className='w-full px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>

                              <label htmlFor="name" className='absolute text-sm -top-3 opacity-[.56]'>Age</label>
                              <p
                                   id="name"
                                   className="bg-transparent w-full outline-none"

                              >18</p>
                         </div>
                         <div className='w-full px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>

                              <label htmlFor="name" className='absolute text-sm -top-3 opacity-[.56]'>Gender</label>
                              <p
                                   id="name"
                                   className="bg-transparent w-full outline-none"

                              >male</p>
                         </div>
                         <div className='w-full px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>

                              <label htmlFor="name" className='absolute text-sm -top-3 opacity-[.56]'>Phone number</label>
                              <p
                                   id="name"
                                   className="bg-transparent w-full outline-none"

                              >9775270245</p>
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




               </form>
          </div>
     )
}

export default Patient
