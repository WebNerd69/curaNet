import React, { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/dist/style.css";
import TableStaff from "../components/TableStaff";
import { AdminContext } from "../context/AdminContext";
import axios from "axios"
import {toast} from "react-toastify"
const AssignStaff = () => {
    // context
    const { staffdata,BACKEND_URI,selectedStaff,adminToken,userData } = useContext(AdminContext)

    const [selectedDate, setSelectedDate] = useState(null);
    const [time, setTime] = useState("12:00");
    const [buttonDisable , setButtonDisable] = useState(true)
    const today = new Date();

    useEffect(()=>{
        if(selectedDate===null || selectedDate< today){
            setButtonDisable(true)
        }else if(selectedDate>=today){
            setButtonDisable(false)
        }
    },[selectedDate])
    // Merge date + time into a single Date object
    const handleDateSelect = (date) => {
        if (!date) return;
        const [hours, minutes] = time.split(":").map(Number);
        const updated = new Date(date);
        updated.setHours(hours);
        updated.setMinutes(minutes);
        setSelectedDate(updated);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
        // console.log(e.target.value)
        if (selectedDate) {
            const [hours, minutes] = e.target.value.split(":").map(Number);
            const updated = new Date(selectedDate);
            updated.setHours(hours);
            updated.setMinutes(minutes);
            setSelectedDate(updated);
        }
    };


    const handleAssign = async()=>{
        try {
            const res =  await axios.post(`${BACKEND_URI}staff/assign`,
                {
                    staffIds:selectedStaff,
                    shiftDateTime:selectedDate
                },
                {headers:{
                    token:adminToken,
                    adminemail:userData.email,
                    adminid:userData._id
                }}
            )
            if(!res.data.success){
                console.log(res.data)
            }
            toast.success("Assigned staffs")
        } catch (error) {
            console.log(error.message)
        }
    }

    const defaultClassNames = getDefaultClassNames();
    return (
        <div className="flex w-full h-full justify-between items-center relative">

            <div className="w-[75%] h-[95vh] flex justify-center items-center">
                <TableStaff staffdata={staffdata} selectEmployees={true} />
            </div>
            <div className="w-[25%] h-[95vh] flex flex-col justify-evenly items-center">
                {/* date picker */}
                <div className="flex flex-col items-center gap-4 p-6 max-w-md mx-auto bg-zinc-900 text-zinc-200 rounded-2xl shadow-lg">
                    {/* Date Picker */}
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        captionLayout="dropdown"
                        className={{
                            today: `border-amber-500`, // Add a border to today's date
                            selected: `bg-amber-500 border-amber-500 text-white`, // Highlight the selected day
                            root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
                            chevron: `${defaultClassNames.chevron} fill-amber-500`,
                        }}
                    />

                    {/* Time Picker */}
                    <input
                        type="time"
                        value={time}
                        onChange={handleTimeChange}
                        className="border border-zinc-800 rounded-xl px-3 py-2 focus:outline-none focus:ring bg-zinc-800 focus:bg-none"
                    />

                    {/* Display */}
                    <p className="text-zinc-300">
                        {selectedDate
                            ? `Selected: ${format(selectedDate, "PPpp")}`
                            : "Pick a date & time"}
                    </p>
                </div>

                {/* submit button */}
                <button
                    type="submit"
                    className='px-7 py-3 border border-zinc-800 rounded-xl font-semibold cursor-pointer disabled:opacity-[.56] disabled:cursor-not-allowed text-zinc-200'
                    disabled={buttonDisable}
                    onClick={handleAssign}
                >
                    Assign staff
                </button>

            </div>
        </div>
    )
}

export default AssignStaff