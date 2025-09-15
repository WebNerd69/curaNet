import React, { useContext, useEffect, useState } from 'react'
import PaymentCard from '../../components/PaymentCard'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'

const Payments = () => {
  const [paymentData , setpaymentData] = useState()
  const {userData,BACKEND_URI} = useContext(UserContext)
  const fetchData = async ()=>{
    try {
      const res = await axios.get(`${BACKEND_URI}billing/get-bills/68c7198e25c3a6dc3e3ad3a6`)
      console.log(res.data.data)
      if(!res.data.success){
        toast.error("Oops! something went wrong")
      }
      setpaymentData(res.data.data)

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
      {Array.isArray(paymentData)&&paymentData.length>0?
      paymentData.map((item,index)=>{return(<PaymentCard date={item.date} doctorName={item.doctorName} totalBill={item.totalBill} status={item.paymentStatus} key={index}/>)}):
      <p>
        No payments to be displayed...
      </p>
      }
    </div>
  )
}

export default Payments
