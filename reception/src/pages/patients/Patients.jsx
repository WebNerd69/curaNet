import React, { useContext } from 'react'
import PatientTable from '../../components/PatientTable'
import { ReceptionContext } from '../../context/ReceptionContext'

const Patients = () => {
     const { patientList } = useContext(ReceptionContext);
     console.log(patientList)
     return (
          <div className='w-full h-[100vh]'>
               <PatientTable patientData={patientList} />
          </div>
     )
}

export default Patients
