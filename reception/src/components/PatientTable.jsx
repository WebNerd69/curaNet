import { ListFilter } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

const PatientTable = ({ patientData }) => {
     const { register, watch } = useForm()
     const [filterOpen, setFilterOpen] = useState(true)
     const [filteredData, setFilteredData] = useState(patientData);

     const idFilter = watch("_id", "");


     // toggle checkbox

     // filtering logic
     const filterData = () => {
          return patientData.filter((patient) => {
               const matchId = idFilter
                    ? patient._id.toLowerCase().includes(idFilter.toLowerCase())
                    : true;

               return matchId;
          });
     };

     // re-run filter whenever filters change
     useEffect(() => {
          setFilteredData(filterData());
          // console.log(filterData())
     }, [idFilter]);


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
                    <div className={`flex w-[30%] justify-between items-center ${filterOpen ? "block" : "hidden"} `}>
                         
                         <div className='w-[100%] px-5 py-1 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                              <input
                                   {...register("_id")}
                                   id="_id"
                                   type="text"
                                   className="bg-transparent w-full outline-none"
                                   placeholder="patient id"
                              />
                         </div>
                    </div>

               </div>
               {/* header */}
               <div className={`grid w-full grid-cols-[2fr_2fr_.5fr_.7fr_1fr_2fr_1fr_1fr] gap-1 text-zinc-400 h-10 items-center z-0`}>
                    <p className=' opacity-[.56] text-sm font-medium'>ID</p>
                    <p className=' opacity-[.56] text-sm font-medium'>NAME</p>
                    <p className=' opacity-[.56] text-sm font-medium'>AGE</p>
                    <p className=' opacity-[.56] text-sm font-medium'>GENDER</p>
                    <p className=' opacity-[.56] text-sm font-medium'>BLOOD GROUP</p>
                    <p className=' opacity-[.56] text-sm font-medium'>EMAIL</p>
                    <p className=' opacity-[.56] text-sm font-medium'>PHONE</p>
                    <p className=' opacity-[.56] text-sm font-medium'>EMERGENCY CON.</p>

               </div>
               {/* body */}
               <div className='w-full h-full relative overflow-y-scroll flex flex-col gap-y-7 text-zinc-300 py-5 '>
                    {filteredData.map((patient) => (
                         <div
                              key={patient.id}
                              className="grid w-full grid-cols-[2fr_2fr_.5fr_.7fr_1fr_2fr_1fr_1fr] gap-1 h-10 items-center hover:bg-zinc-800 transition-all duration-150 cursor-default relative group "
                         >
                              <p className=" text-zinc-400 ">{patient._id}</p>
                              <p className=" ">{patient.name}</p>
                              <p className=" text-zinc-400 ">{patient.age}</p>
                              <p className=" text-zinc-400 ">{patient.gender}</p>
                              <p className=" text-zinc-400 ">{patient.bloodGroup}</p>
                              <p className={`${patient.email? "text-zinc-300":"text-zinc-400"}`}>{patient.email ? patient.email :"Not Given"}</p>
                              <p className="">{patient.phone}</p>
                              <p className=" text-zinc-400 ">{patient.emergencyContact}</p>

                              {/* hover details */}
                              <div className='w-[20vw] h-[7vh] bg-[#9e9e9e3b] rounded-3xl group-hover:flex hidden z-10 absolute backdrop-blur-md right-0 top-12 px-5 py-3 items-center justify-center'>
                                   <p className='text-sm text-zinc-300'>{patient.address}</p>
                              </div>
                         </div>
                    ))}

               </div>
          </div>
     )
}

export default PatientTable
