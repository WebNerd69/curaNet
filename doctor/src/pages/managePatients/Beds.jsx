import React from 'react'
import Bed from '../../components/Bed';


const Beds = () => {

     const beds = [
          // 🏥 General Ward (G) - Subward A
          { ward: "G-A", bedNumber: 102, available: false, patientName: "Edward", gender: "Male" ,patientId: "123456"},
          { ward: "G-A", bedNumber: 104, available: false, patientName: "Samantha", gender: "Female" ,patientId: "123456"},
          { ward: "G-A", bedNumber: 104, available: false, patientName: "Samantha", gender: "Female" ,patientId: "123456"},
          { ward: "G-A", bedNumber: 104, available: false, patientName: "Samantha", gender: "Female" ,patientId: "123456"},
          { ward: "G-A", bedNumber: 104, available: false, patientName: "Samantha", gender: "Female" ,patientId: "123456"},
          { ward: "G-A", bedNumber: 104, available: false, patientName: "Samantha", gender: "Female" ,patientId: "123456"},
          { ward: "G-A", bedNumber: 104, available: false, patientName: "Samantha", gender: "Female" ,patientId: "123456"},
          { ward: "G-A", bedNumber: 104, available: false, patientName: "Samantha", gender: "Female" ,patientId: "123456"},
          { ward: "G-A", bedNumber: 104, available: false, patientName: "Samantha", gender: "Female" ,patientId: "123456"},

     ]

     return (
          <div className='w-full h-full relative flex flex-col items-center justify-start gap-y-20 text-zinc-200 py-20 px-10'>

               <div className='w-[90%]'>

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
                                   patientId={bed.patientId}
                                   />)
                              })
                         }

                    </div>
               </div>


          </div>
     )
}

export default Beds
