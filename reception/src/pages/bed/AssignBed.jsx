import React, { useContext, useEffect, useState } from 'react'
import { ReceptionContext } from '../../context/ReceptionContext'
import Bed from '../../components/Bed'
import { useForm } from 'react-hook-form'
import axios from "axios"
import { toast } from "react-toastify"
const AssignBed = () => {
    const { beds, BACKEND_URI, receptionistToken, userData, setBeds } = useContext(ReceptionContext)
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm(

        {
            mode: "onChange",   // validates while typing
            reValidateMode: "onChange", // re-checks on every change
        }

    )

    const [bedData , setBedData] = useState(beds)

    const fetchBeds = async () => {
        try {
            const res = await axios.get(`${BACKEND_URI}bed/`)
            console.log(res.data)
            setBedData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBeds()
    }, [])

    // console.log(userData)
    const submit = async (data) => {
        try {
            const res = await axios.post(`${BACKEND_URI}bed/assign-patient`, {
                bedNumber: data.bed_number,
                ward: data.ward,
                patientID: data.patient_id,
                // patientName: data.name,
                // gender: data.gender
            }, {
                headers: {
                    token: receptionistToken,
                    receptionistid: userData._id,
                    receptionistemail: userData.email
                }
            })
            if (!res.data.success) {
                console.log(res.data.message)
            }
            toast.success("Assigned Successfully")
            fetchBeds()
        } catch (error) {
            console.log(error)
        }
    }

    const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    return (
        <div className='w-full h-full relative flex'>
            <div className='w-[70%] h-full relative flex flex-col items-center justify-evenly gap-y-20 text-zinc-200 p-10'>

                <div className='w-[100%]'>
                    <p className='text-lg px-5 mb-5 font-semibold'>
                        General Ward
                    </p>
                    <div className='w-full min-h-24 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-7'>
                        {
                            bedData.filter((bed) => bed.ward.includes("general")).map((bed) => {
                                return (<Bed
                                    key={`${bed.ward}-${bed.bedNumber}`}
                                    ward={bed.ward}
                                    bedNumber={bed.bedNumber}
                                    patientName={bed.patientName}
                                    available={bed.available}
                                    gender={bed.gender}
                                />)
                            })
                        }

                    </div>
                </div>
                <div className='w-[100%]'>
                    <p className='text-lg px-5 mb-5 font-semibold'>
                        Maternity Ward
                    </p>
                    <div className='w-full min-h-24 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-7'>
                        {
                            bedData.filter((bed) => bed.ward.includes("maternity")).map((bed) => {
                                return (<Bed
                                    key={`${bed.ward}-${bed.bedNumber}`}
                                    ward={bed.ward}
                                    bedNumber={bed.bedNumber}
                                    patientName={bed.patientName}
                                    available={bed.available}
                                    gender={bed.gender}
                                />)
                            })
                        }

                    </div>
                </div>
                <div className='w-[100%]'>
                    <p className='text-lg px-5 mb-5 font-semibold'>
                        ICU Ward
                    </p>
                    <div className='w-full min-h-24 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-7'>
                        {
                            bedData.filter((bed) => bed.ward.includes("icu")).map((bed) => {
                                return (<Bed
                                    key={`${bed.ward}-${bed.bedNumber}`}
                                    ward={bed.ward}
                                    bedNumber={bed.bedNumber}
                                    patientName={bed.patientName}
                                    available={bed.available}
                                    gender={bed.gender}
                                />)
                            })
                        }

                    </div>
                </div>
                <div className='w-[100%]'>
                    <p className='text-lg px-5 mb-5 font-semibold'>
                        Emergency Ward
                    </p>
                    <div className='w-full min-h-24 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-7'>
                        {
                            bedData.filter((bed) => bed.ward.includes("emergency")).map((bed) => {
                                return (<Bed
                                    key={`${bed.ward}-${bed.bedNumber}`}
                                    ward={bed.ward}
                                    bedNumber={bed.bedNumber}
                                    patientName={bed.patientName}
                                    available={bed.available}
                                    gender={bed.gender}
                                />)
                            })
                        }

                    </div>
                </div>


            </div>

            <div className='w-[30%] h-full relative px-5'>
                <div className='fixed top-[15%] w-[400px] h-[650px] rounded-3xl bg-zinc-900 mx-auto p-5 flex flex-col gap-5'>
                    <p className='text-center font-medium text-2xl mb-5'>Assign Beds</p>
                    <form onSubmit={handleSubmit(submit)} className='w-full flex-col flex gap-5 items-center'>
                        {/* name of the Patient */}
                        <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                            <label htmlFor="name" className='absolute text-sm -top-3 opacity-[.56]'>Name *</label>
                            <input
                                {...register("name", {
                                    required: "Name is required",
                                    minLength: {
                                        value: 3,
                                        message: "Name must be at least 3 characters",
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "Name must be less than 50 characters",
                                    },
                                    pattern: {
                                        value: namePattern,
                                        message: "Name can only contain letters and spaces",
                                    },
                                })}
                                id="name"
                                type="text"
                                className="bg-transparent w-full outline-none"
                                placeholder="Rudra Pratap Roy"
                            />
                        </div>
                        {errors.name ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.name.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>This is the display name of the patient</p>}
                        {/* gender of the Patient */}
                        <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                            <label htmlFor="gender" className='absolute text-sm -top-3 opacity-[.56]'>gender *</label>
                            <input
                                {...register("gender", {
                                    required: "gender is required",

                                })}
                                id="gender"
                                type="text"
                                className="bg-transparent w-full outline-none"
                                placeholder="male"
                            />
                        </div>
                        {errors.gender ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.gender.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>This is the gender of the patient</p>}

                        <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                            <label htmlFor="patient_id" className='absolute text-sm -top-3 opacity-[.56]'>Patient ID *</label>
                            <input
                                {...register("patient_id", {
                                    required: "Patient ID is required",

                                })}
                                id="patient_id"
                                type="text"
                                className="bg-transparent w-full outline-none"
                                placeholder="pat_a1b1c1"
                            />
                        </div>
                        {errors.patient_id ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.patient_id.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>Patient id</p>}

                        <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                            <label htmlFor="bed_number" className='absolute text-sm -top-3 opacity-[.56]'>Bed number *</label>
                            <input
                                {...register("bed_number", {
                                    required: "Bed number is required",

                                })}
                                id="bed_number"
                                type="text"
                                className="bg-transparent w-full outline-none"
                                placeholder="101"
                            />
                        </div>
                        {errors.bed_number ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.bed_number.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>This is the bed number assigned to the patient</p>}

                        <div className='w-[80%] flex items-center px-5 py-3  bg-zinc-900 border-2 border-zinc-800 rounded-xl cursor-pointer relative'>
                            <label htmlFor="w" className='absolute text-sm -top-3 opacity-[.56]'>Ward</label>
                            <select {...register("ward")} className='bg-transparent outline-none w-full cursor-pointer ' id='w'>
                                <option value="general" className='bg-zinc-900 border-zinc-800 '>General</option>

                                <option value="maternity" className='bg-zinc-900 border-zinc-800 '>Maternity</option>

                                <option value="icu" className='bg-zinc-900 border-zinc-800 '>ICU</option>

                                <option value="emergency" className='bg-zinc-900 border-zinc-800 '>Emergency</option>
                            </select>

                        </div>
                        {/* submit button */}
                        <button
                            type="submit"
                            className='px-7 py-3 border border-zinc-800 rounded-xl font-semibold cursor-pointer disabled:opacity-[.56] disabled:cursor-not-allowed'
                            disabled={!isValid || isSubmitting}
                        >
                            {isSubmitting ? "Adding patient ..." : "Add patient"}
                        </button>
                    </form>
                </div>

            </div>
        </div >
    )
}

export default AssignBed
