import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { ListFilter} from 'lucide-react';
import TableStaff from '../components/TableStaff';
import { AdminContext } from '../context/AdminContext';



const SeeStaff = () => {
  const {staffdata} = useContext(AdminContext)
  return (
    <div className='w-full h-[100vh] relative flex flex-col items-center justify-center'>
      <TableStaff staffdata={staffdata}/>
    </div>
  )
}

export default SeeStaff