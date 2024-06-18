"use client"

import { IoIosArrowRoundForward } from "react-icons/io";

export default function HomePageButton() {
    return (
        <div className="">
            <a href='https://www.paypal.com' target='blank' rel='noopener noreferrer'>
                <button 
                className='homepage-button flex justify-center items-center border w-3/5 sm:w-2/5 lg:w-1/5 py-2  bg-gradient-to-br from-blue-500 via-white to-red-500 text-black font-bold text-lg'
                >
                    Donate Now <IoIosArrowRoundForward className="text-4xl text-black" />
                </button>
            </a>
        </div>
    );
}