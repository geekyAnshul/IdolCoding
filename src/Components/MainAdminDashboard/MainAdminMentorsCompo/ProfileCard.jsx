


import React from 'react';
import { LiaTelegramPlane } from "react-icons/lia";
import { CiCalendarDate } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const ProfileCard = () => {
    return (
        <div className="max-w-xl mx-auto bg-white rounded-xl overflow-hidden border-2 border-[#C2B0B0] py-4">
            <div className="bg-cover bg-center h-56 px-2">
                <div className="flex justify-center border-2 border-green-300 rounded-xl">
                    <img src="https://thumbs.dreamstime.com/z/happy-young-indian-arab-business-man-wearing-suit-headshot-portrait-ceo-leader-professional-manager-smiling-expert-businessman-257487832.jpg" alt="Profile"
                        className='h-48 w-full object-cover object-top rounded-xl' />
                </div>
            </div>
            <div className="p-4">
                <div className='flex flex-col sm:flex-row justify-between'>
                    <h2 className="text-gray-900 text-xl font-bold">Mr. Robert Fox</h2>
                    <div className='flex gap-2 text-xl items-center mt-2 sm:mt-0'>
                        <p className="text-gray-600">4.5</p>
                        <FaStar className='text-yellow-500' />
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-between gap-2 mt-2'>
                    <div className='flex gap-2 items-center'>
                        <LiaTelegramPlane className='text-2xl' />
                        <p className="text-gray-600 text-sm">Frontend Developer</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <CiCalendarDate className='text-2xl' />
                        <p className="text-gray-600 text-sm">4 Year</p>
                    </div>
                </div>
                <div className="mt-4">
                    <div className='flex justify-between'>
                        <div className="text-green-600 text-md">Profile Completed</div>
                        <div className="text-green-600 text-sm mt-1">76%</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '76%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;