import { createContext , useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext() 






const UserContextProvider = (props)=>{

     // state variables 
     const [userData,setUserData] = useState({})
     
     // useEffect(()=>{
     //      console.log("current user data" ,userData)
     // },[userData])
     
     // variables

     const BACKEND_URI = "https://curanet-backend-5m6o.onrender.com"
     const value = {
          // setter variables
          setUserData,

          // getter variables
          userData,


          // variables
          BACKEND_URI,

          // navigate
          // navigate     
     }


     return(
          <UserContext.Provider value={value}>
               {props.children}
          </UserContext.Provider>
     )
}


export default UserContextProvider
