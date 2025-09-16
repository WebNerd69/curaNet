import React, { createContext, useContext, useState } from 'react';

export const DoctorContext = createContext();

const DoctorProvider = (props) => {
  const [userData, setUserData] = useState([]);
  const [doctorToken, setDoctorToken] = useState();
  const [appointments,setAppointments] =useState([])


  const BACKEND_URI = "http://localhost:6900/api/";

  // ✅ define the value object properly
  const value = {
    userData,
    doctorToken,
    appointments,
    setAppointments,
    setUserData,
    setDoctorToken,
    BACKEND_URI,
  };

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};

export default DoctorProvider;
