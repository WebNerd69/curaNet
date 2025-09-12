import { Eye, EyeClosed } from 'lucide-react';
import React from 'react'
import { useForm } from 'react-hook-form';

const Profile = () => {
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, setValue } = useForm(
        {
            mode: "onChange",   // validates while typing
            reValidateMode: "onChange", // re-checks on every change
        }
    );



    const submit = (data) => {
        console.log(data)
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    const phonePattern = /^[0-9]{10}$/;

    return (
        <div className='w-full h-full flex items-center justify-center text-zinc-200 relative flex-col gap-y-10'>
            <div className='w-[50%] h-[40%] border-2 rounded-3xl flex flex-col border-zinc-800 justify-center items-center'>
                <p className='text-3xl py-5 h-[20%] font-medium'>Profile</p>
                <form onSubmit={handleSubmit(submit)} className='w-full h-[60%] flex-col flex gap-6 items-center '>

                    <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                        <label htmlFor="name" className='absolute text-sm -top-3 opacity-[.56]'>Name</label>
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
                            value={'Rudra Pratap Roy'}
                            disabled
                        />
                    </div>
                    <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>Display name</p>

                    <div className='w-[80%] flex justify-between items-center gap-x-5'>

                        <div className='w-full gap-y-5 flex flex-col '>

                            <div className='w-[100%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                                <label htmlFor="email" className='absolute text-sm -top-3 opacity-[.56]'>Email</label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        minLength: {
                                            value: 15,
                                            message: "Email must be at least 15 characters",
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: "Email must be less than 50 characters",
                                        },
                                        pattern: {
                                            value: emailPattern,
                                            message: "Email can only contain letters and spaces",
                                        },
                                    })}
                                    id='email'
                                    type='email'
                                    className='bg-transparent w-full outline-none '
                                    placeholder='rroy64330@gmail.com'
                                    value={'rroy64330@gmail.com'}
                                    disabled
                                />

                            </div>
                            <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>Work email</p>

                        </div>
                        <div className='w-full flex flex-col gap-y-5'>

                            <div className='w-[100%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                                <label htmlFor="phone" className='absolute text-sm -top-3 opacity-[.56]'>Phone</label>
                                <input
                                    {...register("phone", {
                                        required: "Phone number is required",
                                        minLength: {
                                            value: 10,
                                            message: "Phone number must be at 10 digits",
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: "Phone number must be 10 digits",
                                        },
                                        pattern: {
                                            value: phonePattern,
                                            message: "Phone number can only contain numbers",
                                        },
                                    })}
                                    id='phone'
                                    className='bg-transparent w-full outline-none '
                                    type='tel'
                                    placeholder='9775270246'
                                    value={'9775270246'}
                                    disabled
                                />
                            </div>
                            <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>Active phone number</p>

                        </div>
                    </div>

                    {/* submit button */}
                    {/* <button
                        type="submit"
                        className='px-7 py-3 border border-zinc-800 rounded-xl font-semibold cursor-pointer disabled:opacity-[.56] disabled:cursor-not-allowed'
                        disabled={!isValid || isSubmitting}
                    >
                        {isSubmitting ? "Changing Password ..." : "Change Password"}
                    </button> */}
                </form>
            </div>
        </div>
    )
}

export default Profile
