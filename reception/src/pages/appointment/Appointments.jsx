import React, { useContext } from 'react'
import { ReceptionContext } from '../../context/ReceptionContext'
import AppointmentsTable from '../../components/AppointmentsTable';

const Appointments = () => {
     const { appointmentList } = useContext(ReceptionContext);
     return (
          <div className='w-full h-[100vh]'>
               <AppointmentsTable patientData={appointmentList} />
          </div>
     )
}

export default Appointments
