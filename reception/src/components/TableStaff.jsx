import React, { useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { ListFilter, Search } from 'lucide-react';


const TableStaff = ({ staffdata }) => {
     const { register, watch } = useForm()
     const [filterOpen, setFilterOpen] = useState(true)
     const [filteredData, setFilteredData] = useState(staffdata);



     // watch all form inputs
     const nameFilter = watch("name", "");
     const specializationFilter = watch("specialization", "");

     // toggle checkbox

     // filtering logic
     const filterData = () => {
          return staffdata.filter((staff) => {
               const matchName = nameFilter
                    ? staff.name.toLowerCase().includes(nameFilter.toLowerCase())
                    : true;

               const matchSpecialization = specializationFilter
                    ? staff.specialization.toLowerCase() === specializationFilter.toLowerCase()
                    : true;

               return matchName && matchSpecialization;
          });
     };

     // re-run filter whenever filters change
     useEffect(() => {
          setFilteredData(filterData());
          // console.log(filterData())
     }, [nameFilter, specializationFilter]);


     const handleFilterToggle = () => {
          setFilterOpen(!filterOpen)
     }
     return (
          <div className='w-full h-full bg-zinc-950 rounded-3xl flex flex-col relative px-7 py-7 shadow-2xl border-zinc-800'>
               {/* filter */}
               <div className='h-14 w-full flex items-center justify-between text-zinc-300 px-3 relative'>
                    <button className='flex items-center gap-2 group' onClick={handleFilterToggle}>
                         Filters
                         <ListFilter className={`text-[#BC37F5] w-4 h-4 opacity-[.56] group-hover:opacity-100`} />
                    </button>
                    <div className={`flex w-[50%] justify-between items-center ${filterOpen ? "block" : "hidden"} `}>
                         <div className='w-[30%] flex justify-center items-center px-5 py-1  bg-zinc-900 border-2 border-zinc-800 rounded-xl cursor-pointer text-zinc-300 '>
                              <select {...register("specialization")} className='bg-transparent outline-none px-3 cursor-pointer' defaultValue={""}>
                                   <option value="" className='bg-zinc-900 border-zinc-800 '>All</option>
                                   <option value="general" className='bg-zinc-900 border-zinc-800 '>general</option>
                                   <option value="cardiology" className='bg-zinc-900 border-zinc-800 '>cardiology</option>
                                   <option value="psychiatry" className='bg-zinc-900 border-zinc-800 '>psychiatry</option>
                                   <option value="urology" className='bg-zinc-900 border-zinc-800 '>urology</option>
                                   <option value="radiology" className='bg-zinc-900 border-zinc-800 '>radiology</option>
                                   <option value="dermatology" className='bg-zinc-900 border-zinc-800 '>dermatology</option>
                                   <option value="neurology" className='bg-zinc-900 border-zinc-800 '>neurology</option>
                                   <option value="pediatrics" className='bg-zinc-900 border-zinc-800 '>pediatrics</option>
                              </select>
                         </div>
                         <div className='w-[60%] px-5 py-1 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                              <input
                                   {...register("name")}
                                   id="name"
                                   type="text"
                                   className="bg-transparent w-full outline-none"
                                   placeholder="search..."
                              />
                         </div>
                    </div>

               </div>
               {/* header */}
               <div className={`grid w-full grid-cols-[1fr_3fr_.5fr_2fr_1fr] gap-1 text-zinc-400 h-10 items-center`}>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>ID</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>NAME</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>STATUS</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>SPECIALIZATION</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>APPOINTMENTS</p>
               </div>
               {/* body */}
               <div className='w-full h-full relative overflow-y-scroll flex flex-col gap-y-7 text-zinc-300 py-5 '>
                    {filteredData.map((staff) => (
                         <div key={staff.id} className={`grid w-full grid-cols-[1fr_3fr_.5fr_2fr_1fr] gap-1 items-center h-10`}>
                              <p className='px-3 text-zinc-400'>{staff.id}</p>
                              <p className='px-4'>{staff.name}</p>
                              <div className="w-full justify-center flex relative">
                                   <span className={`rounded-full w-3 h-3 ${staff.status.toLowerCase() === "active" ? 'bg-[#BC37F5]' : 'bg-zinc-600'}`}></span>
                              </div>
                              <p className='px-7 text-zinc-400'>{staff.specialization}</p>
                              <p className='px-7 text-zinc-400'>{staff.appointments.length}</p>
                         </div>
                    ))}

               </div>
          </div>
     )
}

export default TableStaff
