import React, { useContext } from 'react'
import PatientTable from '../../components/PatientTable'
import { ReceptionContext } from '../../context/ReceptionContext'

const Patients = () => {
     const { patientList } = useContext(ReceptionContext);
     return (
          <div className='w-full h-[100vh]'>
               <PatientTable patientData={patientList} />
          </div>
     )
}

export default Patients
