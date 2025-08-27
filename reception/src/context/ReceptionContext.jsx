import { createContext, useState } from "react";

export const ReceptionContext = createContext();


const doctorList_test = [
     {
          id:"stf_a1b1c1",
          name:"Dr. Tony Tony Chopper",
          specialization:"general",
          status:"active",
          appointments:[
               {
                    id:"appt_1",
                    patientName:"Monkey D. Luffy",
                    date:"2023-10-01",
                    time:"10:00",
                    status:"confirmed"
               },
               {
                    id:"appt_2",
                    patientName:"Roronoa Zoro",
                    date:"2023-10-02",
                    time:"11:00",
                    status:"pending"
               }
          ]
     },
     {
          id: "stf_d4e5f6",
          name: "Dr. Nico Robin",
          specialization: "neurology",
          status: "active",
          appointments: [
               {
                    id: "appt_3",
                    patientName: "Nami",
                    date: "2023-10-03",
                    time: "09:30",
                    status: "confirmed"
               },
               {
                    id: "appt_4",
                    patientName: "Usopp",
                    date: "2023-10-04",
                    time: "14:00",
                    status: "confirmed"
               }
          ]
     },
     {
          id: "stf_g7h8i9",
          name: "Dr. Trafalgar Law",
          specialization: "cardiology",
          status: "inactive",
          appointments: [
               {
                    id: "appt_5",
                    patientName: "Vinsmoke Sanji",
                    date: "2023-10-05",
                    time: "15:00",
                    status: "cancelled"
               }
          ]
     },
     {
          id: "stf_j1k2l3",
          name: "Dr. Kureha",
          specialization: "general",
          status: "active",
          appointments: [
               {
                    id: "appt_6",
                    patientName: "Franky",
                    date: "2023-10-06",
                    time: "10:30",
                    status: "confirmed"
               },
               {
                    id: "appt_7",
                    patientName: "Brook",
                    date: "2023-10-06",
                    time: "16:00",
                    status: "pending"
               }
          ]
     },
     {
          id: "stf_m2n3o4",
          name: "Dr. Akainu",
          specialization: "oncology",
          status: "active",
          appointments: [
               {
                    id: "appt_8",
                    patientName: "Sabo",
                    date: "2023-10-07",
                    time: "08:00",
                    status: "confirmed"
               },
               {
                    id: "appt_9",
                    patientName: "Portgas D. Ace",
                    date: "2023-10-07",
                    time: "09:00",
                    status: "confirmed"
               }
          ]
     },
     {
          id: "stf_p5q6r7",
          name: "Dr. Aokiji",
          specialization: "dermatology",
          status: "active",
          appointments: [
               {
                    id: "appt_10",
                    patientName: "Buggy the Clown",
                    date: "2023-10-08",
                    time: "12:00",
                    status: "confirmed"
               }
          ]
     },
     {
          id: "stf_s8t9u0",
          name: "Dr. Borsalino",
          specialization: "pediatrics",
          status: "inactive",
          appointments: []
     },
     {
          id: "stf_v1w2x3",
          name: "Dr. Sengoku",
          specialization: "general",
          status: "active",
          appointments: [
               {
                    id: "appt_11",
                    patientName: "Marshall D. Teach",
                    date: "2023-10-09",
                    time: "13:30",
                    status: "confirmed"
               }
          ]
     },
     {
          id: "stf_y4z5a6",
          name: "Dr. Edward Newgate",
          specialization: "orthopedics",
          status: "active",
          appointments: [
               {
                    id: "appt_12",
                    patientName: "Marco the Phoenix",
                    date: "2023-10-10",
                    time: "10:00",
                    status: "confirmed"
               },
               {
                    id: "appt_13",
                    patientName: "Joz",
                    date: "2023-10-10",
                    time: "11:00",
                    status: "pending"
               },
               {
                    id: "appt_14",
                    patientName: "Vista",
                    date: "2023-10-10",
                    time: "12:00",
                    status: "confirmed"
               }
          ]
     },
     {
          id: "stf_b7c8d9",
          name: "Dr. Crocodile",
          specialization: "general",
          status: "active",
          appointments: [
               {
                    id: "appt_15",
                    patientName: "Nefertari Vivi",
                    date: "2023-10-11",
                    time: "09:00",
                    status: "confirmed"
               }
          ]
     },
     {
          id: "stf_e0f1g2",
          name: "Dr. Dracule Mihawk",
          specialization: "ophthalmology",
          status: "inactive",
          appointments: []
     },
     {
          id: "stf_h3i4j5",
          name: "Dr. Boa Hancock",
          specialization: "general",
          status: "active",
          appointments: [
               {
                    id: "appt_16",
                    patientName: "Shanks",
                    date: "2023-10-12",
                    time: "11:00",
                    status: "confirmed"
               }
          ]
     },
     {
          id: "stf_k6l7m8",
          name: "Dr. Doflamingo",
          specialization: "psychiatry",
          status: "active",
          appointments: [
               {
                    id: "appt_17",
                    patientName: "Law",
                    date: "2023-10-13",
                    time: "14:00",
                    status: "pending"
               }
          ]
     },
     {
          id: "stf_n9o0p1",
          name: "Dr. Bartholomew Kuma",
          specialization: "general",
          status: "active",
          appointments: [
               {
                    id: "appt_18",
                    patientName: "Bonney",
                    date: "2023-10-14",
                    time: "10:00",
                    status: "confirmed"
               }
          ]
     }
];

const patientList_test = [
  {
    id: "pat_a1b1c1",
    name: "Ramesh Kumar",
    age: 45,
    gender: "Male",
    status: "on-going",
    case: "general",
    doctor: "Dr. Mehta",
    bed: "G-A-02",
    time: "10:15",
  },
  {
    id: "pat_a1b1c2",
    name: "Anita Sharma",
    age: 29,
    gender: "Female",
    status: "completed",
    case: "maternity",
    doctor: "Dr. Kapoor",
    bed: "M-B-05",
    time: "08:40",
  },
  {
    id: "pat_a1b1c3",
    name: "Mohammed Faiz",
    age: 63,
    gender: "Male",
    status: "pending",
    case: "icu",
    doctor: "Dr. Singh",
    bed: "I-C-01",
    time: "02:10",
  },
  {
    id: "pat_a1b1c4",
    name: "Priya Das",
    age: 34,
    gender: "Female",
    status: "on-going",
    case: "maternity",
    doctor: "Dr. Nair",
    bed: "M-A-03",
    time: "12:20",
  },
  {
    id: "pat_a1b1c5",
    name: "Sunil Verma",
    age: 50,
    gender: "Male",
    status: "completed",
    case: "emergency",
    doctor: "Dr. Rao",
    bed: "E-B-06",
    time: "18:45",
  },
  {
    id: "pat_a1b1c6",
    name: "Kavita Joshi",
    age: 41,
    gender: "Female",
    status: "on-going",
    case: "general",
    doctor: "Dr. Mehta",
    bed: "G-C-04",
    time: "09:00",
  },
  {
    id: "pat_a1b1c7",
    name: "Rajesh Patel",
    age: 72,
    gender: "Male",
    status: "pending",
    case: "icu",
    doctor: "Dr. Iyer",
    bed: "I-A-02",
    time: "03:30",
  },
  {
    id: "pat_a1b1c8",
    name: "Neha Reddy",
    age: 26,
    gender: "Female",
    status: "completed",
    case: "maternity",
    doctor: "Dr. Kapoor",
    bed: "M-C-07",
    time: "11:10",
  },
  {
    id: "pat_a1b1c9",
    name: "Suresh Yadav",
    age: 38,
    gender: "Male",
    status: "on-going",
    case: "emergency",
    doctor: "Dr. Singh",
    bed: "E-A-01",
    time: "16:55",
  },
  {
    id: "pat_a1b1c10",
    name: "Lata Kumari",
    age: 60,
    gender: "Female",
    status: "pending",
    case: "general",
    doctor: "Dr. Rao",
    bed: "G-B-09",
    time: "07:45",
  },
];


const ReceptionContextProvider =(props)=>{

     const [doctorList , setDoctorList] = useState(doctorList_test)
     const [patientList , setPatientList] = useState(patientList_test)




     const value={
          doctorList,
          patientList,
     }

     return(
          <ReceptionContext.Provider value={value}>
               {props.children}
          </ReceptionContext.Provider>
     )
}

export default ReceptionContextProvider;