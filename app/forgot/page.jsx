"use client"
import React, { useState } from "react";
import Link from 'next/link'

function Forgot() {
    return (
        <div className="w-full h-full min-h-screen bg-white sm:px-4 sm:py-16 dark:bg-black">
            <div className="flex flex-col items-center justify-center mt-10">
                
                <div className="w-full p-10 rounded shadow bg-gradient-to-tl dark:from-slate-600 dark:to-black from-white to-slate-300 lg:w-1/3 md:w-1/2">
                    <p tabIndex={0}  aria-label="Forgot Password" className="text-2xl font-extrabold leading-6 text-gray-400 dark:text-gray-600">
                        Forgot Password
                    </p>
                    <p className="mt-4 text-sm font-medium leading-none text-gray-500 dark:text-slate-300">
                        Already know password?&nbsp;
                        <Link href="/signin"><span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none text-gray-800 underline cursor-pointer dark:text-slate-600">
                            
                            Sign in here
                        </span></Link>
                    </p>
                    <div className="flex items-center justify-between w-full py-5">
                        <hr className="w-full bg-gray-400" />
                       
                        <hr className="w-full bg-gray-400 " />
                    </div>
                    <div>
                        <lable className="text-sm font-medium leading-none text-gray-800 dark:text-slate-400">Email</lable>
                        <input aria-label="enter email adress" role="input" type="email" className="w-full py-3 pl-3 mt-2 text-xs font-medium leading-none text-gray-800 bg-gray-200 border rounded focus:outline-none" />
                    </div>
                    
                    
                    <div className="mt-8">
                        <button role="button" aria-label="create my account" className="w-full py-4 text-lg font-bold leading-none text-white transition-transform border rounded focus:ring-indigo-700 focus:outline-none dark:border-slate-700 bg-gradient-to-tl from-pink-500 to-blue-400 border-slate-200 hover:from-slate-500 hover:to-white">
                            Forgot Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forgot;
