import React, { useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { ListFilter, Search } from 'lucide-react';
import { AdminContext } from '../context/AdminContext';

const TableStaff = ({ staffdata , selectEmployees }) => {
     const { register, watch } = useForm()
     const [filterOpen, setFilterOpen] = useState(true)
     const [filteredData, setFilteredData] = useState(staffdata);

     // context
     const {setSelectedStaff , selectedStaff} = useContext(AdminContext)

     // watch all form inputs
     const nameFilter = watch("name", "");
     const roleFilter = watch("role", "");

     // toggle checkbox
     const handleCheckboxChange = (id) => {
          setSelectedStaff((prev) =>
               prev.includes(id)
                    ? prev.filter((item) => item !== id) // remove if already selected
                    : [...prev, id] // add if not selected
          );
     };

     // filtering logic
     const filterData = () => {
          return staffdata.filter((staff) => {
               const matchName = nameFilter
                    ? staff.name.toLowerCase().includes(nameFilter.toLowerCase())
                    : true;

               const matchRole = roleFilter
                    ? staff.role.toLowerCase().includes(roleFilter.toLowerCase())
                    : true;

               return matchName && matchRole;
          });
     };

     // re-run filter whenever filters change
     useEffect(() => {
          setFilteredData(filterData());
          // console.log(filterData())
     }, [nameFilter, roleFilter]);


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
                              <select {...register("role")} className='bg-transparent outline-none px-3 cursor-pointer' defaultValue={""}>
                                   <option value="" className='bg-zinc-900 border-zinc-800 '>All</option>
                                   <option value="doctor" className='bg-zinc-900 border-zinc-800 '>Doctor</option>
                                   <option value="nurse" className='bg-zinc-900 border-zinc-800 '>Nurse</option>
                                   <option value="receptionist" className='bg-zinc-900 border-zinc-800 '>Receptionist</option>
                                   <option value="janitor" className='bg-zinc-900 border-zinc-800 '>Janitor</option>
                                   <option value="admin" className='bg-zinc-900 border-zinc-800 '>Admin</option>
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
               <div className={`grid w-full ${selectEmployees=== true ?'grid-cols-[.5fr_2fr_3fr_2fr_.5fr_1.5fr_1.5fr]':'grid-cols-[2fr_3fr_2fr_.5fr_1.5fr_1.5fr]'} gap-1 text-zinc-400 h-10 items-center`}>
                    {selectEmployees === true &&<p className="px-3 opacity-[.56] text-sm font-medium">✔</p>}
                    <p className='px-3 opacity-[.56] text-sm font-medium'>ID</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>NAME</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>ROLE</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>STATUS</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>SPECIALIZATION</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>SALARY</p>
               </div>
               {/* body */}
               <div className='w-full h-full relative overflow-y-scroll flex flex-col gap-y-7 text-zinc-300 py-5 '>
                    {filteredData.map((staff) => (
                         
                         <div key={staff._id} className={`grid w-full ${selectEmployees=== true ?'grid-cols-[.5fr_2fr_3fr_2fr_.5fr_1.5fr_1.5fr]':'grid-cols-[2fr_3fr_2fr_.5fr_1.5fr_1.5fr]'} gap-1 items-center h-10`}>
                              {selectEmployees === true&&<input
                                   type="checkbox"
                                   checked={selectedStaff.includes(staff._id)}
                                   onChange={() => handleCheckboxChange(staff._id)}
                                   className="cursor-pointer accent-[#BC37F5] rounded"
                              />}
                              <p className='px-3 text-zinc-400'>{staff._id}</p>
                              <p className='px-3'>{staff.name}</p>
                              <p className='px-4 text-zinc-400'>{staff.role}</p>
                              <div className="w-full justify-center flex relative">
                                   <span className={`rounded-full w-3 h-3 ${staff.status === "Active" ? 'bg-[#BC37F5]' : 'bg-zinc-600'}`}></span>
                              </div>
                              <p className='px-5 text-zinc-400'>{staff.specialization}</p>
                              <p className='px-5 text-zinc-400'>{staff.salary}</p>
                         </div>
                    ))}

               </div>
          </div>
     )
}

export default TableStaff
