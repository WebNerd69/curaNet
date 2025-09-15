import React, { useContext } from 'react'
import { AlignJustify, ChevronsUpDown, LogOut, KeyRound, Settings, ChartArea, UsersRound, UserRoundPlus, UserRoundMinus, ContactRound, IndianRupee, BedSingle, CrossIcon, MenuIcon, Notebook, NotepadText, X, RotateCw } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import {useAuth0} from "@auth0/auth0-react"
const Sidebar = () => {

     const {logout} = useAuth0()

     // state variables
     const [isOpen, setIsOpen] = useState(false);
     const [isLogoutClicked, setIsLogoutClicked] = useState(false)
     // functions

     const popUpHandler = () => {
          setIsOpen(!isOpen)
     }


     const {userData} = useContext(UserContext)
     return (
          <div className='w-[100vw] md:w-[20vw] -translate-x-full md:translate-x-0 relative h-full z-10'  id='sidebar'>

               <div className='bg-zinc-900 h-screen text-zinc-200 md:w-[20vw] w-[100vw] flex flex-col gap-5 fixed top-0 left-0 z-10'>
                    {/* profile section */}
                    <header className='flex items-center justify-center p-2 w-full h-20 group relative cursor-pointer md:mt-3' >
                         <div className='flex items-center gap-3 md:group-hover:bg-zinc-800 rounded-xl p-2 w-full'>
                              <div className={`absolute w-60 h-36 rounded-xl bg-zinc-800 border-1 border-zinc-700 top-3 right-0 md:left-[18vw] flex flex-col justify-center items-center p-2 gap-1  ${isOpen ? "opacity-100 z-10 block" : "opacity-0 z-0 hidden"} transition-opacity duration-150 shadow-xl`}>
                                   <div className='w-full px-2'>

                                        <p className='text-sm font-medium text-zinc-500'>profile settings</p>
                                   </div>
                                   <NavLink to={'/profile'} className='px-2 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 w-full flex gap-3 items-center'>
                                        <div className='w-8 h-8 p-1 rounded-md border-[1px] border-zinc-600 flex justify-center items-center'>
                                             <Settings className='w-4 h-4 opacity-70' />
                                        </div>
                                        <span className='font-medium'>Settings</span>
                                   </NavLink>
                                   <button className='px-2 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 w-full flex gap-3 items-center' onClick={() => setIsLogoutClicked(true)}>
                                        <div className='w-8 h-8 p-1 rounded-md border-[1px] border-zinc-600 flex justify-center items-center'>

                                             <LogOut className='w-4 h-4 opacity-70' />
                                        </div>
                                        <span className='font-medium' >LogOut</span>
                                   </button>
                              </div>
                              <div className={`absolute w-60 h-32 rounded-xl bg-zinc-800 border-1 border-zinc-700 top-[16vh] left-[25vw] flex flex-col justify-center items-center p-4 gap-3  ${isLogoutClicked ? "opacity-100 z-10 block" : "opacity-0 z-0 hidden"} transition-opacity duration-150 shadow-xl`}>
                                   <p className='text-sm text-zinc-400 font-medium'>Are you sure you want to logout?</p>
                                   <div className='flex gap-2 w-full justify-between items-center'>

                                        <button 
                                        className='px-8 py-2 bg-zinc-800 border-2 rounded-xl border-zinc-700 '
                                        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                                        >
                                             Yes
                                        </button>


                                        <button className='px-8 py-2 bg-[#49197D] rounded-xl border-2 border-[#49197D]' onClick={() => setIsLogoutClicked(false)}>No</button>
                                   </div>
                              </div>
                              <NavLink to={'/profile'} className='w-10 h-10 bg-[#49197D] rounded-lg flex items-center justify-center'>
                                   <AlignJustify className='w-6 h-6' />
                              </NavLink>
                              <div className='flex justify-between items-center md:w-[80%] w-full' onClick={popUpHandler}>
                                   <div className='flex flex-col px-3'>

                                        <p className=' text-[16px] font-medium'>{userData.name? userData.name : "User Panel"}</p>
                                        <p className='text-[14px] opacity-[.56]'>{userData.email? userData.email : "jaybharat@gmail.com"}</p>
                                   </div>
                                   <ChevronsUpDown className='w-6 h-6 text-[#BC37F5]' />

                              </div>
                         </div>
                    </header>


                    {/* dashboard section */}
                    <section className='w-full px-5 py-2 flex-col flex gap-3 relative '>
                         <p className='text-sm opacity-[.56] px-2'>dashboard</p>
                         <NavLink to={'/'} className={({ isActive }) => isActive ? 'w-full flex items-center gap-3 rounded-xl px-2 py-3 md:hover:bg-zinc-800 cursor-pointer text-[#BC37F5]' : 'w-full flex items-center gap-3 rounded-xl px-2 py-3 md:hover:bg-zinc-800 cursor-pointer text-zinc-200'}>
                              <ChartArea className='w-6 h-6' />
                              <span className='font-medium'>Dashboard</span>
                         </NavLink>
                    </section>

                    {/* report section */}
                    <section className='w-full px-5 py-2 flex-col flex gap-3 relative '>
                         <p className='text-sm opacity-[.56] px-2'>documents</p>
                         <NavLink to={'/documents/reports'} className={({ isActive }) => isActive ? 'w-full flex items-center gap-3 rounded-xl px-2 py-3 md:hover:bg-zinc-800 cursor-pointer text-[#BC37F5]' : 'w-full flex items-center gap-3 rounded-xl px-2 py-3 md:hover:bg-zinc-800 cursor-pointer text-zinc-200'}>
                              <Notebook className='w-6 h-6' />
                              <span className='font-medium'>reports</span>
                         </NavLink>
                         <NavLink to={'/documents/payments'} className={({ isActive }) => isActive ? 'w-full flex items-center gap-3 rounded-xl px-2 py-3 md:hover:bg-zinc-800 cursor-pointer text-[#BC37F5]' : 'w-full flex items-center gap-3 rounded-xl px-2 py-3 md:hover:bg-zinc-800 cursor-pointer text-zinc-200'}>
                              <Notebook className='w-6 h-6' />
                              <span className='font-medium'>payments</span>
                         </NavLink>
                    </section>
                    {/* appointment management */}
               <section className='w-full px-5 py-2 flex-col flex gap-3 relative '>

                    <p className='opacity-[.56] text-sm px-2'>manage appointments</p>

                    <NavLink to={'/appointments'} end className={({isActive})=> isActive? 'w-full flex items-center gap-3 rounded-xl px-2 py-3 md:hover:bg-zinc-800 cursor-pointer text-[#BC37F5]' :'w-full flex items-center gap-3 rounded-xl px-2 py-3 md:hover:bg-zinc-800 cursor-pointer text-zinc-200'}>
                         <BedSingle className='w-6 h-6' />
                         <span className='font-medium'>See Appointments</span>
                    </NavLink>

                    <NavLink to={'/appointments/book'} className={({isActive})=> isActive? 'w-full flex items-center gap-3 rounded-xl px-2 py-3 md:hover:bg-zinc-800 cursor-pointer text-[#BC37F5]' :'w-full flex items-center gap-3 rounded-xl px-2 py-3 md:hover:bg-zinc-800 cursor-pointer text-zinc-200'}>
                         <BedSingle className='w-6 h-6' />
                         <span className='font-medium'>Book Appointment</span>
                    </NavLink>

                    <NavLink to={'/appointments/reschedule'} className={({isActive})=> isActive? 'w-full flex items-center gap-3 rounded-xl px-2 py-3 md:hover:bg-zinc-800 cursor-pointer text-[#BC37F5]' :'w-full flex items-center gap-3 rounded-xl px-2 py-3 md:hover:bg-zinc-800 cursor-pointer text-zinc-200'}>
                         <RotateCw className='w-6 h-6' />
                         <span className='font-medium'>Reschedule Appointment</span>
                    </NavLink>

                    <NavLink to={'/appointments/cancel'} className={({isActive})=> isActive? 'w-full flex items-center gap-3 rounded-xl px-2 py-3 md:hover:bg-zinc-800 cursor-pointer text-[#BC37F5]' :'w-full flex items-center gap-3 rounded-xl px-2 py-3 md:hover:bg-zinc-800 cursor-pointer text-zinc-200'}>
                         <X className='w-6 h-6' />
                         <span className='font-medium'>Cancel Appointment</span>
                    </NavLink>
               </section>



               </div>
          </div>

     )
}

export default Sidebar