import React, { useContext, useState } from 'react'
import UpcommingAppointmentCard from '../../components/UpcommingAppointmentCard'
import { ChevronsUpDown } from 'lucide-react';
import { UserContext } from '../../context/UserContext';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from "axios"
const Dashboard = () => {
  const [showAppointments, setShowAppointments] = useState(true);


  const { userData, BACKEND_URI } = useContext(UserContext)
  const [appointments, setAppointments] = useState()
  const fetchData = async () => {
  try {
    const res = await axios.get(`${BACKEND_URI}appointment/user/${userData._id}`)

    if (!res.data.success) {
      toast.error("Oops! Something went wrong")
      return
    }

    // all appointments
    const allAppointments = res.data.data || []
    console.log("all ap...",allAppointments)
    // dates
    const today = new Date()
    today.setHours(0, 0, 0, 0) // normalize start of today
    const sevenDaysLater = new Date()
    sevenDaysLater.setDate(today.getDate() + 7)
    sevenDaysLater.setHours(23, 59, 59, 999) // normalize end of day

    // filter
    const filtered = allAppointments.filter(app => {
      const appDate = new Date(app.dateTime)
      console.log(allAppointments) // make sure you're using correct field name
      return (
        app.status?.toLowerCase() !== "cancelled" && // exclude cancelled
        appDate >= today && 
        appDate <= sevenDaysLater
      )
    })
    console.log("filtered",filtered)
    setAppointments(filtered)
  } catch (error) {
    console.error("Fetch appointments error:", error)
    toast.error("Something went wrong")
  }
}


  useEffect(() => {
    if (userData?._id) fetchData()
  }, [userData])


  return (
    <div className="w-full h-full flex flex-col justify-center md:justify-start items-center px-5 py-3 text-white overflow-x-hidden">
      
      <div
        className="w-full cursor-pointer"
        onClick={() => setShowAppointments(!showAppointments)}
      >
        <span className="w-full text-xl font-semibold mb-10 mt-5 text-center md:text-start flex gap-3 justify-center items-center">
          Your Upcoming Appointments
        </span>
      </div>

      {appointments && Array.isArray(appointments) && appointments.length > 0 ? (
        <div className="w-full flex flex-col md:flex-row gap-14 flex-wrap justify-start md:items-center">
          {appointments.map((item, index) => {
            console.log(item)
            return (
              <UpcommingAppointmentCard
                key={index}
                doctor={item.doctorName}
                patient={item.userName}
                dateTime={item.dateTime}
                aptID={item._id}
              />
            )

          })}
        </div>
      ) : (
        <div className="w-full text-xl font-semibold">
          <p className='text-center'>You have no upcoming appointments</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
