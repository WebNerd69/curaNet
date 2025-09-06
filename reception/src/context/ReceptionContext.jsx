import { createContext, useState } from "react";

export const ReceptionContext = createContext();


const doctorList_test = [
     {
          id: "stf_a1b1c1",
          name: "Dr. Tony Tony Chopper",
          specialization: "general",
          status: "active",
          appointments: [
               {
                    id: "appt_1",
                    patientName: "Monkey D. Luffy",
                    date: "2023-10-01",
                    time: "10:00",
                    status: "confirmed"
               },
               {
                    id: "appt_2",
                    patientName: "Roronoa Zoro",
                    date: "2023-10-02",
                    time: "11:00",
                    status: "pending"
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

const appointmentList_test = [
     {
          id: "apt_a1b1c1",
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
          id: "apt_a1b1c2",
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
          id: "apt_a1b1c3",
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
          id: "apt_a1b1c4",
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
          id: "apt_a1b1c5",
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
          id: "apt_a1b1c6",
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
          id: "apt_a1b1c7",
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
          id: "apt_a1b1c8",
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
          id: "apt_a1b1c9",
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
          id: "apt_a1b1c10",
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

const patientList_test = [
     {
          _id: "pat_a1b1c1",
          name: "Ramesh Kumar",
          age: 45,
          gender: "Male",
          bloodGroup: "O+",
          email: "ramesh.kumar@example.com",
          phone: "1234567890",
          emergencyContact: "9876543210",
          address: "East Kameshwari Road, Cooch Behar",
     },
     {
          _id: "pat_d2e2f2",
          name: "Priya Sharma",
          age: 32,
          gender: "Female",
          bloodGroup: "A-",
          email: "priya.sharma@example.com",
          phone: "9876543210",
          emergencyContact: "8765432109",
          address: "B. S. Road, Cooch Behar",
     },
     {
          _id: "pat_g3h3i3",
          name: "Amit Singh",
          age: 60,
          gender: "Male",
          bloodGroup: "B+",
          email: "amit.singh@example.com",
          phone: "8765432109",
          emergencyContact: "7654321098",
          address: "New Town, Cooch Behar",
     },
     {
          _id: "pat_j4k4l4",
          name: "Anjali Gupta",
          age: 28,
          gender: "Female",
          bloodGroup: "AB+",
          email: "anjali.gupta@example.com",
          phone: "7654321098",
          emergencyContact: "6543210987",
          address: "Hospital Road, Cooch Behar",
     },
     {
          _id: "pat_m5n5o5",
          name: "Suresh Patil",
          age: 55,
          gender: "Male",
          bloodGroup: "O-",
          email: "suresh.patil@example.com",
          phone: "6543210987",
          emergencyContact: "5432109876",
          address: "College Para, Cooch Behar",
     },
     {
          _id: "pat_p6q6r6",
          name: "Deepika Verma",
          age: 40,
          gender: "Female",
          bloodGroup: "A+",
          email: "deepika.verma@example.com",
          phone: "5432109876",
          emergencyContact: "4321098765",
          address: "Nishiganj, Cooch Behar",
     },
     {
          _id: "pat_s7t7u7",
          name: "Rajesh Mishra",
          age: 50,
          gender: "Male",
          bloodGroup: "B-",
          email: "rajesh.mishra@example.com",
          phone: "4321098765",
          emergencyContact: "3210987654",
          address: "Maharaja Road, Cooch Behar",
     },
     {
          _id: "pat_v8w8x8",
          name: "Kavita Reddy",
          age: 35,
          gender: "Female",
          bloodGroup: "AB-",
          email: "kavita.reddy@example.com",
          phone: "3210987654",
          emergencyContact: "2109876543",
          address: "Guriahati, Cooch Behar",
     },
     {
          _id: "pat_y9z9a9",
          name: "Ganesh Das",
          age: 65,
          gender: "Male",
          bloodGroup: "O+",
          email: "ganesh.das@example.com",
          phone: "2109876543",
          emergencyContact: "1098765432",
          address: "Dinhata Road, Cooch Behar",
     },
     {
          _id: "pat_b1c1d1",
          name: "Sonam Sen",
          age: 25,
          gender: "Female",
          bloodGroup: "A-",
          email: "sonam.sen@example.com",
          phone: "1098765432",
          emergencyContact: "0987654321",
          address: "Panchanan Colony, Cooch Behar",
     },
     {
          _id: "pat_e2f2g2",
          name: "Arun Kumar",
          age: 48,
          gender: "Male",
          bloodGroup: "B+",
          email: "arun.kumar@example.com",
          phone: "0987654321",
          emergencyContact: "9876543210",
          address: "Jenkho, Cooch Behar",
     },
     {
          _id: "pat_h3i3j3",
          name: "Ritu Sanyal",
          age: 38,
          gender: "Female",
          bloodGroup: "AB+",
          email: "ritu.sanyal@example.com",
          phone: "9876543210",
          emergencyContact: "8765432109",
          address: "Debibari, Cooch Behar",
     },
];

const bedList_test = [
     // 🏥 General Ward (G) - Subward A
     { ward: "G-A", bedNumber: 101, available: true, patientName: "", gender: "" },
     { ward: "G-A", bedNumber: 102, available: false, patientName: "Edward", gender: "Male" },
     { ward: "G-A", bedNumber: 103, available: true, patientName: "", gender: "" },
     { ward: "G-A", bedNumber: 104, available: false, patientName: "Samantha", gender: "Female" },
     { ward: "G-A", bedNumber: 105, available: true, patientName: "", gender: "" },

     // Subward B
     { ward: "G-B", bedNumber: 201, available: false, patientName: "Michael", gender: "Male" },
     { ward: "G-B", bedNumber: 202, available: true, patientName: "", gender: "" },
     { ward: "G-B", bedNumber: 203, available: false, patientName: "Angela", gender: "Female" },
     { ward: "G-B", bedNumber: 204, available: true, patientName: "", gender: "" },
     { ward: "G-B", bedNumber: 205, available: true, patientName: "", gender: "" },

     // Subward C
     { ward: "G-C", bedNumber: 301, available: false, patientName: "Robert", gender: "Male" },
     { ward: "G-C", bedNumber: 302, available: true, patientName: "", gender: "" },
     { ward: "G-C", bedNumber: 303, available: false, patientName: "Linda", gender: "Female" },
     { ward: "G-C", bedNumber: 304, available: true, patientName: "", gender: "" },
     { ward: "G-C", bedNumber: 305, available: true, patientName: "", gender: "" },

     // 🤰 Maternity Ward (M) - Subward A
     { ward: "M-A", bedNumber: 101, available: true, patientName: "", gender: "" },
     { ward: "M-A", bedNumber: 102, available: false, patientName: "Guney", gender: "Female" },
     { ward: "M-A", bedNumber: 103, available: true, patientName: "", gender: "" },
     { ward: "M-A", bedNumber: 104, available: false, patientName: "Priya", gender: "Female" },
     { ward: "M-A", bedNumber: 105, available: true, patientName: "", gender: "" },

     // Subward B
     { ward: "M-B", bedNumber: 201, available: false, patientName: "Sarah", gender: "Female" },
     { ward: "M-B", bedNumber: 202, available: true, patientName: "", gender: "" },
     { ward: "M-B", bedNumber: 203, available: false, patientName: "Fatima", gender: "Female" },
     { ward: "M-B", bedNumber: 204, available: true, patientName: "", gender: "" },
     { ward: "M-B", bedNumber: 205, available: true, patientName: "", gender: "" },

     // Subward C
     { ward: "M-C", bedNumber: 301, available: false, patientName: "Emily", gender: "Female" },
     { ward: "M-C", bedNumber: 302, available: true, patientName: "", gender: "" },
     { ward: "M-C", bedNumber: 303, available: false, patientName: "Sophia", gender: "Female" },
     { ward: "M-C", bedNumber: 304, available: true, patientName: "", gender: "" },
     { ward: "M-C", bedNumber: 305, available: true, patientName: "", gender: "" },

     // 🩺 ICU Ward (I) - Subward A
     { ward: "I-A", bedNumber: 101, available: true, patientName: "", gender: "" },
     { ward: "I-A", bedNumber: 102, available: false, patientName: "Roger", gender: "Male" },
     { ward: "I-A", bedNumber: 103, available: true, patientName: "", gender: "" },
     { ward: "I-A", bedNumber: 104, available: false, patientName: "Anita", gender: "Female" },
     { ward: "I-A", bedNumber: 105, available: true, patientName: "", gender: "" },

     // Subward B
     { ward: "I-B", bedNumber: 201, available: false, patientName: "Daniel", gender: "Male" },
     { ward: "I-B", bedNumber: 202, available: true, patientName: "", gender: "" },
     { ward: "I-B", bedNumber: 203, available: false, patientName: "Olivia", gender: "Female" },
     { ward: "I-B", bedNumber: 204, available: true, patientName: "", gender: "" },
     { ward: "I-B", bedNumber: 205, available: true, patientName: "", gender: "" },

     // Subward C
     { ward: "I-C", bedNumber: 301, available: false, patientName: "William", gender: "Male" },
     { ward: "I-C", bedNumber: 302, available: true, patientName: "", gender: "" },
     { ward: "I-C", bedNumber: 303, available: false, patientName: "Chloe", gender: "Female" },
     { ward: "I-C", bedNumber: 304, available: true, patientName: "", gender: "" },
     { ward: "I-C", bedNumber: 305, available: true, patientName: "", gender: "" },

     // 🚑 Emergency Ward (E) - Subward A
     { ward: "E-A", bedNumber: 101, available: true, patientName: "", gender: "" },
     { ward: "E-A", bedNumber: 102, available: false, patientName: "Ace", gender: "Male" },
     { ward: "E-A", bedNumber: 103, available: true, patientName: "", gender: "" },
     { ward: "E-A", bedNumber: 104, available: false, patientName: "Maya", gender: "Female" },
     { ward: "E-A", bedNumber: 105, available: true, patientName: "", gender: "" },

     // Subward B
     { ward: "E-B", bedNumber: 201, available: false, patientName: "John", gender: "Male" },
     { ward: "E-B", bedNumber: 202, available: true, patientName: "", gender: "" },
     { ward: "E-B", bedNumber: 203, available: false, patientName: "Rachel", gender: "Female" },
     { ward: "E-B", bedNumber: 204, available: true, patientName: "", gender: "" },
     { ward: "E-B", bedNumber: 205, available: true, patientName: "", gender: "" },

     // Subward C
     { ward: "E-C", bedNumber: 301, available: false, patientName: "David", gender: "Male" },
     { ward: "E-C", bedNumber: 302, available: true, patientName: "", gender: "" },
     { ward: "E-C", bedNumber: 303, available: false, patientName: "Isabella", gender: "Female" },
     { ward: "E-C", bedNumber: 304, available: true, patientName: "", gender: "" },
     { ward: "E-C", bedNumber: 305, available: true, patientName: "", gender: "" },
];
const ReceptionContextProvider = (props) => {

     const [doctorList, setDoctorList] = useState(doctorList_test)
     const [patientList, setPatientList] = useState(patientList_test)
     const [appointmentList, setappointmentList] = useState(appointmentList_test)
     const [beds,setBeds] = useState(bedList_test)




     const value = {
          doctorList,
          patientList,
          appointmentList,
          beds
     }

     return (
          <ReceptionContext.Provider value={value}>
               {props.children}
          </ReceptionContext.Provider>
     )
}

export default ReceptionContextProvider;