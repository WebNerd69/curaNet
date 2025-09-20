import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useEffect, useState } from "react";
import axios from "axios"


export const AdminContext = createContext()


const genderData_test =[
  { date: "2025-06-01", Males: 2581, Females: 3602 },
  { date: "2025-06-02", Males: 4027, Females: 4329 },
  { date: "2025-06-03", Males: 3712, Females: 3529 },
  { date: "2025-06-04", Males: 4144, Females: 4485 },
  { date: "2025-06-05", Males: 4610, Females: 3380 },
  { date: "2025-06-06", Males: 3895, Females: 3135 },
  { date: "2025-06-07", Males: 4294, Females: 3302 },
  { date: "2025-06-08", Males: 4098, Females: 3005 },
  { date: "2025-06-09", Males: 4988, Females: 3211 },
  { date: "2025-06-10", Males: 3262, Females: 3264 },
  { date: "2025-06-11", Males: 3167, Females: 4081 },
  { date: "2025-06-12", Males: 4147, Females: 3514 },
  { date: "2025-06-13", Males: 3980, Females: 4836 },
  { date: "2025-06-14", Males: 3744, Females: 3599 },
  { date: "2025-06-15", Males: 4636, Females: 2820 },
  { date: "2025-06-16", Males: 2807, Females: 3840 },
  { date: "2025-06-17", Males: 4734, Females: 4735 },
  { date: "2025-06-18", Males: 4317, Females: 4370 },
  { date: "2025-06-19", Males: 3288, Females: 3434 },
  { date: "2025-06-20", Males: 3379, Females: 3905 },
  { date: "2025-06-21", Males: 3942, Females: 4413 },
  { date: "2025-06-22", Males: 3941, Females: 4399 },
  { date: "2025-06-23", Males: 3832, Females: 3841 },
  { date: "2025-06-24", Males: 4213, Females: 2935 },
  { date: "2025-06-25", Males: 3738, Females: 4929 },
  { date: "2025-06-26", Males: 4170, Females: 2578 },
  { date: "2025-06-27", Males: 2961, Females: 4527 },
  { date: "2025-06-28", Males: 3557, Females: 4264 },
  { date: "2025-06-29", Males: 4375, Females: 4950 },
  { date: "2025-06-30", Males: 4213, Females: 4756 },
  { date: "2025-07-01", Males: 4485, Females: 3801 },
  { date: "2025-07-02", Males: 4221, Females: 4659 },
  { date: "2025-07-03", Males: 3775, Females: 4368 },
  { date: "2025-07-04", Males: 3617, Females: 4937 },
  { date: "2025-07-05", Males: 2811, Females: 4446 },
  { date: "2025-07-06", Males: 3887, Females: 3523 },
  { date: "2025-07-07", Males: 2542, Females: 4787 },
  { date: "2025-07-08", Males: 3396, Females: 4519 },
  { date: "2025-07-09", Males: 4137, Females: 4904 },
  { date: "2025-07-10", Males: 4136, Females: 2719 },
  { date: "2025-07-11", Males: 4410, Females: 4174 },
  { date: "2025-07-12", Males: 3954, Females: 4650 },
  { date: "2025-07-13", Males: 3998, Females: 4426 },
  { date: "2025-07-14", Males: 3333, Females: 3340 },
  { date: "2025-07-15", Males: 4303, Females: 4249 },
  { date: "2025-07-16", Males: 3540, Females: 2710 },
  { date: "2025-07-17", Males: 2657, Females: 4785 },
  { date: "2025-07-18", Males: 4056, Females: 4400 },
  { date: "2025-07-19", Males: 3505, Females: 3461 },
  { date: "2025-07-20", Males: 3871, Females: 4812 },
  { date: "2025-07-21", Males: 4401, Females: 3830 },
  { date: "2025-07-22", Males: 4965, Females: 2833 },
  { date: "2025-07-23", Males: 4562, Females: 2795 },
  { date: "2025-07-24", Males: 2921, Females: 3008 },
  { date: "2025-07-25", Males: 3570, Females: 3579 },
  { date: "2025-07-26", Males: 4064, Females: 2513 },
  { date: "2025-07-27", Males: 2620, Females: 3868 },
  { date: "2025-07-28", Males: 4458, Females: 2573 },
  { date: "2025-07-29", Males: 3660, Females: 4376 },
  { date: "2025-07-30", Males: 4858, Females: 3746 },
  { date: "2025-07-31", Males: 4773, Females: 3557 },
  { date: "2025-08-01", Males: 4352, Females: 4304 },
  { date: "2025-08-02", Males: 4438, Females: 4009 },
  { date: "2025-08-03", Males: 3634, Females: 3140 },
  { date: "2025-08-04", Males: 3556, Females: 3309 },
  { date: "2025-08-05", Males: 3872, Females: 3389 },
  { date: "2025-08-06", Males: 3385, Females: 3937 },
  { date: "2025-08-07", Males: 4781, Females: 4676 },
  { date: "2025-08-08", Males: 4376, Females: 4068 },
  { date: "2025-08-09", Males: 4723, Females: 3372 },
  { date: "2025-08-10", Males: 3022, Females: 3021 },
  { date: "2025-08-11", Males: 3340, Females: 4416 },
  { date: "2025-08-12", Males: 2770, Females: 3035 },
  { date: "2025-08-13", Males: 2761, Females: 4130 },
  { date: "2025-08-14", Males: 3610, Females: 4017 },
  { date: "2025-08-15", Males: 3348, Females: 4663 },
  { date: "2025-08-16", Males: 3943, Females: 3849 },
  { date: "2025-08-17", Males: 4733, Females: 4305 },
  { date: "2025-08-18", Males: 2996, Females: 2578 },
  { date: "2025-08-19", Males: 4678, Females: 2896 },
  { date: "2025-08-20", Males: 4813, Females: 3542 },
  { date: "2025-08-21", Males: 2824, Females: 3083 },
  { date: "2025-08-22", Males: 2898, Females: 2850 },
  { date: "2025-08-23", Males: 3259, Females: 4938 },
  { date: "2025-08-24", Males: 2523, Females: 4692 },
  { date: "2025-08-25", Males: 3351, Females: 3100 }
];

const BACKEND_URI = "https://curanet-backend-5m6o.onrender.com/api/"


const AdminContextProvider = (props) => {
  // state variables
  const [staffdata, setStaffdata] = useState()
  const [genderData, setgenderData] = useState(genderData_test)
  const [selectedStaff, setSelectedStaff] = useState([])
  const [userData,setUserData] = useState({})
  const [adminToken,setAdminToken] = useState()
  
  useEffect(()=>{
    console.log(selectedStaff)
  },[selectedStaff])
  
  
  
  const fetchAllStaff = async ()=>{
    try {
      const res = await axios.get(`${BACKEND_URI}staff/`)
      setStaffdata(res.data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchAllStaff()
  },[userData])

  const value = {
    // getter variables
    staffdata,
    selectedStaff,
    genderData,
    userData,
    adminToken,
    setStaffdata,

    // setter variables
    setSelectedStaff,
    setUserData,
    setAdminToken,

    // variables
    BACKEND_URI
  }

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider
