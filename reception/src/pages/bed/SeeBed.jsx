import React from 'react'
import Bed from '../../components/Bed';

const SeeBeds = () => {

     const beds = [
          // 🏥 General Ward (G) - Subward A
          { ward: "G-A", bedNumber: 101, available: true, patientName: "", gender: "" },
          { ward: "G-A", bedNumber: 102, available: false, patientName: "Edward", gender: "Male" },
          { ward: "G-A", bedNumber: 103, available: true, patientName: "", gender: "" },
          { ward: "G-A", bedNumber: 104, available: false, patientName: "Samantha", gender: "Female" },
          { ward: "G-A", bedNumber: 105, available: true, patientName: "", gender: "" },

          // Subward B
          { ward: "G-B", bedNumber: 201, available: false, patientName: "Michael", gender: "Male" },
          { ward: "G-B", bedNumber: 202, available: true, patientName: "", gender: "" },
          { ward: "G-B", bedNumber: 203, available: false, patientName: "Angela", gender: "Female" },
          { ward: "G-B", bedNumber: 204, available: true, patientName: "", gender: "" },
          { ward: "G-B", bedNumber: 205, available: true, patientName: "", gender: "" },

          // Subward C
          { ward: "G-C", bedNumber: 301, available: false, patientName: "Robert", gender: "Male" },
          { ward: "G-C", bedNumber: 302, available: true, patientName: "", gender: "" },
          { ward: "G-C", bedNumber: 303, available: false, patientName: "Linda", gender: "Female" },
          { ward: "G-C", bedNumber: 304, available: true, patientName: "", gender: "" },
          { ward: "G-C", bedNumber: 305, available: true, patientName: "", gender: "" },

          // 🤰 Maternity Ward (M) - Subward A
          { ward: "M-A", bedNumber: 101, available: true, patientName: "", gender: "" },
          { ward: "M-A", bedNumber: 102, available: false, patientName: "Guney", gender: "Female" },
          { ward: "M-A", bedNumber: 103, available: true, patientName: "", gender: "" },
          { ward: "M-A", bedNumber: 104, available: false, patientName: "Priya", gender: "Female" },
          { ward: "M-A", bedNumber: 105, available: true, patientName: "", gender: "" },

          // Subward B
          { ward: "M-B", bedNumber: 201, available: false, patientName: "Sarah", gender: "Female" },
          { ward: "M-B", bedNumber: 202, available: true, patientName: "", gender: "" },
          { ward: "M-B", bedNumber: 203, available: false, patientName: "Fatima", gender: "Female" },
          { ward: "M-B", bedNumber: 204, available: true, patientName: "", gender: "" },
          { ward: "M-B", bedNumber: 205, available: true, patientName: "", gender: "" },

          // Subward C
          { ward: "M-C", bedNumber: 301, available: false, patientName: "Emily", gender: "Female" },
          { ward: "M-C", bedNumber: 302, available: true, patientName: "", gender: "" },
          { ward: "M-C", bedNumber: 303, available: false, patientName: "Sophia", gender: "Female" },
          { ward: "M-C", bedNumber: 304, available: true, patientName: "", gender: "" },
          { ward: "M-C", bedNumber: 305, available: true, patientName: "", gender: "" },

          // 🩺 ICU Ward (I) - Subward A
          { ward: "I-A", bedNumber: 101, available: true, patientName: "", gender: "" },
          { ward: "I-A", bedNumber: 102, available: false, patientName: "Roger", gender: "Male" },
          { ward: "I-A", bedNumber: 103, available: true, patientName: "", gender: "" },
          { ward: "I-A", bedNumber: 104, available: false, patientName: "Anita", gender: "Female" },
          { ward: "I-A", bedNumber: 105, available: true, patientName: "", gender: "" },

          // Subward B
          { ward: "I-B", bedNumber: 201, available: false, patientName: "Daniel", gender: "Male" },
          { ward: "I-B", bedNumber: 202, available: true, patientName: "", gender: "" },
          { ward: "I-B", bedNumber: 203, available: false, patientName: "Olivia", gender: "Female" },
          { ward: "I-B", bedNumber: 204, available: true, patientName: "", gender: "" },
          { ward: "I-B", bedNumber: 205, available: true, patientName: "", gender: "" },

          // Subward C
          { ward: "I-C", bedNumber: 301, available: false, patientName: "William", gender: "Male" },
          { ward: "I-C", bedNumber: 302, available: true, patientName: "", gender: "" },
          { ward: "I-C", bedNumber: 303, available: false, patientName: "Chloe", gender: "Female" },
          { ward: "I-C", bedNumber: 304, available: true, patientName: "", gender: "" },
          { ward: "I-C", bedNumber: 305, available: true, patientName: "", gender: "" },

          // 🚑 Emergency Ward (E) - Subward A
          { ward: "E-A", bedNumber: 101, available: true, patientName: "", gender: "" },
          { ward: "E-A", bedNumber: 102, available: false, patientName: "Ace", gender: "Male" },
          { ward: "E-A", bedNumber: 103, available: true, patientName: "", gender: "" },
          { ward: "E-A", bedNumber: 104, available: false, patientName: "Maya", gender: "Female" },
          { ward: "E-A", bedNumber: 105, available: true, patientName: "", gender: "" },

          // Subward B
          { ward: "E-B", bedNumber: 201, available: false, patientName: "John", gender: "Male" },
          { ward: "E-B", bedNumber: 202, available: true, patientName: "", gender: "" },
          { ward: "E-B", bedNumber: 203, available: false, patientName: "Rachel", gender: "Female" },
          { ward: "E-B", bedNumber: 204, available: true, patientName: "", gender: "" },
          { ward: "E-B", bedNumber: 205, available: true, patientName: "", gender: "" },

          // Subward C
          { ward: "E-C", bedNumber: 301, available: false, patientName: "David", gender: "Male" },
          { ward: "E-C", bedNumber: 302, available: true, patientName: "", gender: "" },
          { ward: "E-C", bedNumber: 303, available: false, patientName: "Isabella", gender: "Female" },
          { ward: "E-C", bedNumber: 304, available: true, patientName: "", gender: "" },
          { ward: "E-C", bedNumber: 305, available: true, patientName: "", gender: "" },
     ];

     return (
          <div className='w-full h-full relative flex flex-col items-center justify-evenly gap-y-20 text-zinc-200 p-10'>

               <div className='w-[90%]'>
                    <p className='text-lg px-5 mb-5 font-semibold'>
                         General Ward
                    </p>
                    <div className='w-full min-h-24 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-7'>
                         {
                              beds.filter((bed)=> bed.ward.includes("G")).map((bed)=>{
                                   return(<Bed 
                                   key={`${bed.ward}-${bed.bedNumber}`}
                                   ward={bed.ward}
                                   bedNumber={bed.bedNumber}
                                   patientName={bed.patientName}
                                   available={bed.available}
                                   gender={bed.gender}
                                   />)
                              })
                         }

                    </div>
               </div>
               <div className='w-[90%]'>
                    <p className='text-lg px-5 mb-5 font-semibold'>
                         Maternity Ward
                    </p>
                    <div className='w-full min-h-24 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-7'>
                         {
                              beds.filter((bed)=> bed.ward.includes("M")).map((bed)=>{
                                   return(<Bed 
                                   key={`${bed.ward}-${bed.bedNumber}`}
                                   ward={bed.ward}
                                   bedNumber={bed.bedNumber}
                                   patientName={bed.patientName}
                                   available={bed.available}
                                   gender={bed.gender}
                                   />)
                              })
                         }

                    </div>
               </div>
               <div className='w-[90%]'>
                    <p className='text-lg px-5 mb-5 font-semibold'>
                         ICU Ward
                    </p>
                    <div className='w-full min-h-24 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-7'>
                         {
                              beds.filter((bed)=> bed.ward.includes("I")).map((bed)=>{
                                   return(<Bed 
                                   key={`${bed.ward}-${bed.bedNumber}`}
                                   ward={bed.ward}
                                   bedNumber={bed.bedNumber}
                                   patientName={bed.patientName}
                                   available={bed.available}
                                   gender={bed.gender}
                                   />)
                              })
                         }

                    </div>
               </div>
               <div className='w-[90%]'>
                    <p className='text-lg px-5 mb-5 font-semibold'>
                         Emergency Ward
                    </p>
                    <div className='w-full min-h-24 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-7'>
                         {
                              beds.filter((bed)=> bed.ward.includes("E")).map((bed)=>{
                                   return(<Bed 
                                   key={`${bed.ward}-${bed.bedNumber}`}
                                   ward={bed.ward}
                                   bedNumber={bed.bedNumber}
                                   patientName={bed.patientName}
                                   available={bed.available}
                                   gender={bed.gender}
                                   />)
                              })
                         }

                    </div>
               </div>


          </div>
     )
}

export default SeeBeds
