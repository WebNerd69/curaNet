import { ListFilter } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

const PatientTable = ({ patientData }) => {
     const { register, watch } = useForm()
     const [filterOpen, setFilterOpen] = useState(true)
     const [filteredData, setFilteredData] = useState(patientData);

     const nameFilter = watch("name", "");
     const statusFilter = watch("status", "");

     // toggle checkbox

     // filtering logic
     const filterData = () => {
          return patientData.filter((patient) => {
               const matchName = nameFilter
                    ? patient.name.toLowerCase().includes(nameFilter.toLowerCase())
                    : true;

               const matchStatus = statusFilter
                    ? patient.status.toLowerCase() === statusFilter.toLowerCase()
                    : true;

               return matchName && matchStatus;
          });
     };

     // re-run filter whenever filters change
     useEffect(() => {
          setFilteredData(filterData());
          // console.log(filterData())
     }, [nameFilter, statusFilter]);


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
                              <select {...register("status")} className='bg-transparent outline-none px-3 cursor-pointer' defaultValue={""}>
                                   <option value="" className='bg-zinc-900 border-zinc-800 '>All</option>
                                   <option value="pending" className='bg-zinc-900 border-zinc-800 '>pending</option>
                                   <option value="on-going" className='bg-zinc-900 border-zinc-800 '>on-going</option>
                                   <option value="completed" className='bg-zinc-900 border-zinc-800 '>completed</option>
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
               <div className={`grid w-full grid-cols-[1fr_1.5fr_.5fr_1fr_.7fr_1fr_1fr_.7fr_.8fr] gap-1 text-zinc-400 h-10 items-center`}>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>ID</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>NAME</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>AGE</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>GENDER</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>BED</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>DOCTOR</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>TIME</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>STATUS</p>
                    <p className='px-3 opacity-[.56] text-sm font-medium'>CASE</p>
               </div>
               {/* body */}
               <div className='w-full h-full relative overflow-y-scroll flex flex-col gap-y-7 text-zinc-300 py-5 '>
                    {filteredData.map((patient) => (
                         <div
                              key={patient.id}
                              className="grid w-full grid-cols-[1fr_1.5fr_.5fr_1fr_.7fr_1fr_1fr_.7fr_.8fr] gap-1 h-10 items-center"
                         >
                              <p className="px-3 text-zinc-400 ">{patient.id}</p>
                              <p className="px-4 ">{patient.name}</p>
                              <p className="px-4 text-zinc-400 ">{patient.age}</p>
                              <p className="px-4 text-zinc-400 ">{patient.gender}</p>
                              <p className="px-4 text-zinc-400 ">{patient.bed}</p>
                              <p className="px-4 ">{patient.doctor}</p>
                              <p className="px-4 ">{patient.time}</p>
                              <p className="px-4 text-zinc-400 ">{patient.status}</p>
                              <p className="px-4 text-zinc-400 ">{patient.case}</p>
                         </div>
                    ))}

               </div>
          </div>
     )
}

export default PatientTable
