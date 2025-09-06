import React, { useContext } from 'react'
import { ReceptionContext } from '../../context/ReceptionContext'
import Bed from '../../components/Bed'
import { useForm } from 'react-hook-form'
const AssignBed = () => {
    const { beds } = useContext(ReceptionContext)
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm(

        {
            mode: "onChange",   // validates while typing
            reValidateMode: "onChange", // re-checks on every change
        }

    )
    const submit = (data) => {
        console.log(data)
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
                            beds.filter((bed) => bed.ward.includes("G")).map((bed) => {
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
                            beds.filter((bed) => bed.ward.includes("M")).map((bed) => {
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
                            beds.filter((bed) => bed.ward.includes("I")).map((bed) => {
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
                            beds.filter((bed) => bed.ward.includes("E")).map((bed) => {
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
                <div className='fixed top-[25%] w-[400px] h-[512px] rounded-3xl bg-zinc-900 mx-auto p-5 flex flex-col gap-5'>
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

                        <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                            <label htmlFor="patient_id" className='absolute text-sm -top-3 opacity-[.56]'>Patient ID *</label>
                            <input
                                {...register("patient_id", {
                                    required: "Patient ID is required",
                                    minLength: {
                                        value: 10,
                                        message: "Patient ID must be exactly 10 characters",
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Patient ID must be exactly 10 characters",
                                    },
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
                                    minLength: {
                                        value: 7,
                                        message: "Enter a valid bed number"
                                    }
                                })}
                                id="bed_number"
                                type="text"
                                className="bg-transparent w-full outline-none"
                                placeholder="G-A-101"
                            />
                        </div>
                        {errors.bed_number ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.bed_number.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>This is the bed number assigned to the patient</p>}

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
