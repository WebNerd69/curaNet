import { createContext, useEffect, useState } from "react";
import axios from "axios"
import { toast } from "react-toastify"





export const ReceptionContext = createContext();

const ReceptionContextProvider = (props) => {

     const [doctorList, setDoctorList] = useState([])
     const [patientList, setPatientList] = useState([])
     // const [appointmentList, setappointmentList] = useState([])
     const [beds, setBeds] = useState([])
     const [userData, setUserData] = useState({})
     const [receptionistToken, setReceptionistToken] = useState()


     const BACKEND_URI = "https://curanet-backend-5m6o.onrender.com/api/"

     const fetchPatients = async () => {
          try {
               const res = await axios.get(`${BACKEND_URI}user/getallusers`)
               if (!res.data.success) {
                    toast.error("No data found")
               }
               setPatientList(res.data.users)
               console.log(res.data.users)
          } catch (error) {
               console.log(error)
          }
     }

     const fetchDoctors = async () => {
          try {
               const res = await axios.get(`${BACKEND_URI}staff/`);

               if (!res.data) {
                    toast.error("No data found");
                    return;
               }

               // ✅ filter only doctors
               const doctors = res.data.filter((staff) => staff.role === "doctor");

               setDoctorList(doctors);
          } catch (error) {
               console.log(error);
               toast.error("Failed to fetch doctors");
          }
     };


     useEffect(() => {
          fetchPatients()
          fetchDoctors()
     }, [])


     const value = {
          doctorList,
          patientList,
          // appointmentList,
          beds,
          userData,
          receptionistToken,



          setUserData,
          setReceptionistToken,
          setBeds,


          BACKEND_URI
     }

     return (
          <ReceptionContext.Provider value={value}>
               {props.children}
          </ReceptionContext.Provider>
     )
}

export default ReceptionContextProvider;
