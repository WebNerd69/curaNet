import React from 'react'
import { AlignJustify, ChevronsUpDown, LogOut, KeyRound, Settings, ChartArea, UsersRound, UserRoundPlus, UserRoundMinus, ContactRound, IndianRupee, BedSingle } from 'lucide-react';
import { useState } from 'react';
const Sidebar = () => {
     // state variables
     const [isOpen, setIsOpen] = useState(false);

     // functions

     const popUpHandler = () => {
          setIsOpen(!isOpen)
     }
     
     return (
          <div className='w-[20vw] relative'>
               <div className='bg-zinc-900 h-screen text-zinc-200 w-[20vw] flex flex-col gap-5 fixed top-0 left-0 z-10'>
               <header className='flex items-center justify-center p-2 w-full h-20 group relative cursor-pointer' >
                    <div className='flex items-center gap-3 group-hover:bg-zinc-800 rounded-xl p-2 w-full'>
                         <div className={`absolute w-60 h-48 rounded-xl bg-zinc-800 border-1 border-zinc-700 top-3 left-[18vw] flex flex-col justify-center items-center p-2 gap-1  ${isOpen ? "opacity-100 z-10" : "opacity-0 z-0"} transition-opacity duration-150 shadow-xl`}>
                              <div className='w-full px-2'>

                                   <p className='text-sm font-medium text-zinc-500'>profile settings</p>
                              </div>
                              <div className='px-2 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 w-full flex gap-3 items-center'>
                                   <div className='w-8 h-8 p-1 rounded-md border-[1px] border-zinc-600 flex justify-center items-center'>
                                        <KeyRound className='w-4 h-4 opacity-70' />
                                   </div>
                                   <span className='font-medium'>Change Password</span>
                              </div>
                              <div className='px-2 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 w-full flex gap-3 items-center'>
                                   <div className='w-8 h-8 p-1 rounded-md border-[1px] border-zinc-600 flex justify-center items-center'>
                                        <Settings className='w-4 h-4 opacity-70' />
                                   </div>
                                   <span className='font-medium'>Settings</span>
                              </div>
                              <div className='px-2 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 w-full flex gap-3 items-center'>
                                   <div className='w-8 h-8 p-1 rounded-md border-[1px] border-zinc-600 flex justify-center items-center'>

                                        <LogOut className='w-4 h-4 opacity-70' />
                                   </div>
                                   <span className='font-medium'>LogOut</span>
                              </div>
                         </div>
                         <div className='w-10 h-10 bg-[#49197D] rounded-lg flex items-center justify-center'>
                              <AlignJustify className='w-6 h-6' />
                         </div>
                         <div className='flex justify-between items-center w-[80%]' onClick={popUpHandler}>
                              <div className='flex flex-col px-3'>

                                   <p className=' text-[16px] font-medium'>Admin Panel</p>
                                   <p className='text-[14px] opacity-[.56]'>admin123@gmail.com</p>
                              </div>
                              <ChevronsUpDown className='w-6 h-6 text-[#BC37F5]' />

                         </div>
                    </div>
               </header>


               {/* dashboard section */}
               <section className='w-full px-2 py-2 flex-col flex gap-3 relative '>
                    <p className='text-sm opacity-[.56] px-2'>dashboard</p>
                    <div className='w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer'>
                         <ChartArea className='w-6 h-6' />
                         <span className='font-medium'>Dashboard</span>
                    </div>
               </section>


               {/* manage staff section */}
               <section className='w-full px-2 py-2 flex-col flex gap-3 relative '>
                    <p className='text-sm opacity-[.56] px-2'>manage staff</p>
                    <div className='w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer'>
                         <UsersRound className='w-6 h-6' />
                         <span className='font-medium'>See Staff</span>
                    </div>
                    <div className='w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer'>
                         <UserRoundPlus className='w-6 h-6' />
                         <span className='font-medium'>Add Staff</span>
                    </div>
                    <div className='w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer'>
                         <UserRoundMinus className='w-6 h-6' />
                         <span className='font-medium'>Fire Staff</span>
                    </div>
                    <div className='w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer'>
                         <ContactRound className='w-6 h-6' />
                         <span className='font-medium'>Assign Staff</span>
                    </div>
                    <div className='w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer'>
                         <IndianRupee className='w-6 h-6' />
                         <span className='font-medium'>Manage Payroll</span>
                    </div>
               </section>


               {/* manage beds */}
               <section className='w-full px-2 py-2 flex-col flex gap-3 relative '>
                    <p className='opacity-[.56] text-sm px-2'>manage beds</p>
                    <div className='w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer'>
                         <BedSingle className='w-6 h-6' />
                         <span className='font-medium'>See Bed Availability</span>
                    </div>
                    <div className='w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer'>
                         <div className='relative'>

                              <BedSingle className='w-6 h-6' />
                              <span className=' text-xl absolute -top-3 left-5'>+</span>
                         </div>
                         <span className='font-medium'>Add More Beds</span>
                    </div>
                    <div className='w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer'>
                         <div className='relative'>

                              <BedSingle className='w-6 h-6' />
                              <span className='font-medium text-2xl absolute -top-3 left-5'>-</span>
                         </div>
                         <span className='font-medium'>Remove Beds</span>
                    </div>
               </section>
          </div>
          </div>
          
     )
}

export default Sidebar