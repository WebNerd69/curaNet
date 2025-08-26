import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Eye, EyeClosed } from 'lucide-react';
const ChangePassword = () => {
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, setValue } = useForm(
        {
            mode: "onChange",   // validates while typing
            reValidateMode: "onChange", // re-checks on every change
        }
    );

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const submit = (data) => {
        console.log(data)
    }

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return (
        <div className='w-full h-full relative flex items-center justify-center text-zinc-200'>
            <div className='w-[50%] h-[40%] bg-zinc-950 border-2 border-zinc-800 rounded-3xl p-5 flex flex-col justify-center items-center gap-y-10'>
                {/* title */}
                <div className='w-full h-24 px-10 py-3 font-semibold text-2xl flex items-center justify-center'>
                    <p>Change Password</p>
                </div>
                <form onSubmit={handleSubmit(submit)} className='w-full flex-col flex gap-6 items-center '>

                    <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                        <label htmlFor="Current Password" className='absolute text-sm -top-3 opacity-[.56]'>Current Password</label>
                        <input
                            {...register("currentPassword", {
                                required: "Current Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Current password must be at least 8 characters",
                                }
                            })}
                            id="Current Password"
                            type={isPasswordVisible ? "text" : "password"}
                            className="bg-transparent w-full outline-none"
                            placeholder="Current Password"
                        />
                        <button onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                            {isPasswordVisible ? <EyeClosed className='text-[#bc37f584] hover:text-[#BC37F5]' /> : <Eye className='text-[#bc37f584] hover:text-[#BC37F5]' />}
                        </button>
                    </div>
                    {errors.currentPassword ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.currentPassword.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>Write current password</p>}

                    <div className='w-[80%] px-5 py-3 flex items-center relative rounded-xl border-2 border-zinc-800 bg-zinc-900'>
                        <label htmlFor="newPassword" className='absolute text-sm -top-3 opacity-[.56]'>New Password</label>
                        <input
                            {...register("newPassword", {
                                required: "New Password is required",
                                minLength: {
                                    value: 8,
                                    message: "New Password must be at least 8 characters",
                                },
                                maxLength: {
                                    value: 50,
                                    message: "New Password must be less than 50 characters",
                                },
                                pattern: {
                                    value: strongPasswordRegex,
                                    message: "New Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                                },
                            })}
                            id="newPassword"
                            type={isPasswordVisible ? "text" : "password"}
                            className="bg-transparent w-full outline-none"
                            placeholder="New Password"
                        />
                        <button onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                            {isPasswordVisible ? <EyeClosed className='text-[#bc37f584] hover:text-[#BC37F5]' /> : <Eye className='text-[#bc37f584] hover:text-[#BC37F5]' />}
                        </button>
                    </div>
                    {errors.newPassword ? <p className='text-sm text-red-500 -mt-3 w-[80%]'>{errors.newPassword.message}</p> : <p className='text-sm opacity-[.56] -mt-3 w-[80%]'>Write new password</p>}

                    {/* submit button */}
                    <button
                        type="submit"
                        className='px-7 py-3 border border-zinc-800 rounded-xl font-semibold cursor-pointer disabled:opacity-[.56] disabled:cursor-not-allowed'
                        disabled={!isValid || isSubmitting}
                    >
                        {isSubmitting ? "Changing Password ..." : "Change Password"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword
