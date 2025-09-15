import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import ReportCard from '../../components/ReportCard'
import axios from 'axios'
import { toast } from 'react-toastify'
const Reports = () => {
  const [reportsData , setReportsData] = useState()
  const {userData,BACKEND_URI} = useContext(UserContext)
  const fetchData = async ()=>{
    try {
      const res = await axios.get(`${BACKEND_URI}report/get-user-reports/${userData._id}`)
      if(!res.data.success){
        toast.error("Oops! something went wrong")
      }
      setReportsData(res.data.reports)

    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='w-full h-full flex flex-col gap-10 p-10 items-center text-white overflow-auto' >
      {Array.isArray(reportsData)&&reportsData.length>0?
      reportsData.map((index,report)=>{
        return(
          <ReportCard key={index} id={report._id} doctorName={report.doctorName} date={report.date}/>
        )
      })
    :
    <p className='text-xl text-white text-center w-full'>
      No reports to show
      </p>}
    </div>
  )
}

export default Reports
