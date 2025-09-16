import React from 'react'
import { AlignJustify, ChevronsUpDown, LogOut, KeyRound, Settings, ChartArea, UsersRound, UserRoundPlus, UserRoundMinus, ContactRound, IndianRupee, BedSingle } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { useAuth0 } from '@auth0/auth0-react';
const Sidebar = () => {
     // state variables
     const [isOpen, setIsOpen] = useState(false);
     const [isLogoutClicked, setIsLogoutClicked]= useState(false)

     const {userData} = useContext(AdminContext)
     const {logout} = useAuth0()
     // functions

     const popUpHandler = () => {
          setIsOpen(!isOpen)
     }
     
     return (
          <div className='w-[20vw] relative'>
               <div className='bg-zinc-900 h-screen text-zinc-200 w-[20vw] flex flex-col gap-5 fixed top-0 left-0 z-10'>
               <header className='flex items-center justify-center p-2 w-full h-20 group relative cursor-pointer mt-3' >
                    <div className='flex items-center gap-3 group-hover:bg-zinc-800 rounded-xl p-2 w-full'>
                         <div className={`absolute w-60 h-34 rounded-xl bg-zinc-800 border-1 border-zinc-700 top-3 left-[18vw] flex flex-col justify-center items-center p-2 gap-1  ${isOpen ? "opacity-100 z-10 block" : "opacity-0 z-0 hidden"} transition-opacity duration-150 shadow-xl`}>
                              <div className='w-full px-2'>

                                   <p className='text-sm font-medium text-zinc-500'>profile settings</p>
                              </div>
                              
                              <NavLink to={'/profile'} className='px-2 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 w-full flex gap-3 items-center'>
                                   <div className='w-8 h-8 p-1 rounded-md border-[1px] border-zinc-600 flex justify-center items-center'>
                                        <Settings className='w-4 h-4 opacity-70' />
                                   </div>
                                   <span className='font-medium'>Settings</span>
                              </NavLink>
                              <button className='px-2 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 w-full flex gap-3 items-center' onClick={()=>setIsLogoutClicked(true)}>
                                   <div className='w-8 h-8 p-1 rounded-md border-[1px] border-zinc-600 flex justify-center items-center'>

                                        <LogOut className='w-4 h-4 opacity-70' />
                                   </div>
                                   <span className='font-medium' >LogOut</span>
                              </button>
                         </div>
                         <div className={`absolute w-60 h-32 rounded-xl bg-zinc-800 border-1 border-zinc-700 top-[16vh] left-[25vw] flex flex-col justify-center items-center p-4 gap-3  ${isLogoutClicked ? "opacity-100 z-10 block" : "opacity-0 z-0 hidden"} transition-opacity duration-150 shadow-xl`}>
                              <p className='text-sm text-zinc-400 font-medium'>Are you sure you want to logout?</p>
                              <div className='flex gap-2 w-full justify-between items-center'>
                                   <button className='px-8 py-2 bg-zinc-800 border-2 rounded-xl border-zinc-700 ' 
                                   onClick={logout}
                                   >Yes</button>
                                   <button className='px-8 py-2 bg-[#49197D] rounded-xl border-2 border-[#49197D]' onClick={()=>setIsLogoutClicked(false)}>No</button>
                              </div>
                         </div>
                         <NavLink to={'/profile'} className='w-10 h-10 bg-[#49197D] rounded-lg flex items-center justify-center'>
                              <AlignJustify className='w-6 h-6' />
                         </NavLink>
                         <div className='flex justify-between items-center w-[80%]' onClick={popUpHandler}>
                              <div className='flex flex-col px-3'>

                                   <p className=' text-[16px] font-medium'>{userData.name?userData.name:"Admin panel"}</p>
                                   <p className='text-[14px] opacity-[.56]'>{userData.email?userData.email:"admin123@gmail.com"}</p>
                              </div>
                              <ChevronsUpDown className='w-6 h-6 text-[#BC37F5]' />

                         </div>
                    </div>
               </header>


               {/* dashboard section */}
               <section className='w-full px-2 py-2 flex-col flex gap-3 relative '>
                    <p className='text-sm opacity-[.56] px-2'>dashboard</p>
                    <NavLink to={'/'} className={({isActive})=> isActive? 'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-[#BC37F5]' :'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-zinc-200'}>
                         <ChartArea className='w-6 h-6' />
                         <span className='font-medium'>Dashboard</span>
                    </NavLink>
               </section>


               {/* manage staff section */}
               <section className='w-full px-2 py-2 flex-col flex gap-3 relative '>
                    <p className='text-sm opacity-[.56] px-2'>manage staff</p>
                    <NavLink to={'/staff'} end className={({isActive})=> isActive? 'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-[#BC37F5]' :'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-zinc-200'}>
                         <UsersRound className='w-6 h-6' />
                         <span className='font-medium'>See Staff</span>
                    </NavLink>
                    <NavLink to={'/staff/add'} className={({isActive})=> isActive? 'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-[#BC37F5]' :'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-zinc-200'}>
                         <UserRoundPlus className='w-6 h-6' />
                         <span className='font-medium'>Add Staff</span>
                    </NavLink>
                    <NavLink to={'/staff/fire'} className={({isActive})=> isActive? 'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-[#BC37F5]' :'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-zinc-200'}>
                         <UserRoundMinus className='w-6 h-6' />
                         <span className='font-medium'>Fire Staff</span>
                    </NavLink>
                    <NavLink to={'/staff/assign'} className={({isActive})=> isActive? 'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-[#BC37F5]' :'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-zinc-200'}>
                         <ContactRound className='w-6 h-6' />
                         <span className='font-medium'>Assign Staff</span>
                    </NavLink>
                    <NavLink to={'staff/manage-payroll'} className={({isActive})=> isActive? 'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-[#BC37F5]' :'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-zinc-200'}>
                         <IndianRupee className='w-6 h-6' />
                         <span className='font-medium'>Manage Payroll</span>
                    </NavLink>
               </section>


               {/* manage beds */}
               <section className='w-full px-2 py-2 flex-col flex gap-3 relative '>
                    <p className='opacity-[.56] text-sm px-2'>manage beds</p>
                    <NavLink to={'/beds'} end className={({isActive})=> isActive? 'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-[#BC37F5]' :'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-zinc-200'}>
                         <BedSingle className='w-6 h-6' />
                         <span className='font-medium'>See Bed Availability</span>
                    </NavLink>
                    <NavLink to={'/beds/add'} className={({isActive})=> isActive? 'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-[#BC37F5]' :'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-zinc-200'}>
                         <div className='relative'>

                              <BedSingle className='w-6 h-6' />
                              <span className=' text-xl absolute -top-3 left-5'>+</span>
                         </div>
                         <span className='font-medium'>Add More Beds</span>
                    </NavLink>
                    <NavLink to={'/beds/remove'} className={({isActive})=> isActive? 'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-[#BC37F5]' :'w-full flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-zinc-800 cursor-pointer text-zinc-200'}>
                         <div className='relative'>

                              <BedSingle className='w-6 h-6' />
                              <span className='font-medium text-2xl absolute -top-3 left-5'>-</span>
                         </div>
                         <span className='font-medium'>Remove Beds</span>
                    </NavLink>
               </section>
          </div>
          </div>
          
     )
}

export default Sidebar