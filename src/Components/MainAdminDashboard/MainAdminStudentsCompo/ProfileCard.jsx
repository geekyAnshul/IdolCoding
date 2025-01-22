// import React from 'react'

// const ProfileCard = () => {
//   return (
//     <div>ProfileCard</div>
//   )
// }

// export default ProfileCard


import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";

const ProfileCard = () => {
    return (
        <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden border-2 border-[#C2B0B0]">
            <div className="bg-cover bg-center h-52 p-4" >
                <div className="flex justify-center border-2 border-green-300 rounded-xl">
                    <img src="https://th.bing.com/th?id=OIP.PoFmgWG0dZXmssCtCiBk9QHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Profile"
                        className='h-40 w-[90%] object-cover object-top' />
                </div>
            </div>
            <div className="p-4">
                <div className='flex justify-between'>
                    <h2 className="text-gray-900 text-xl font-bold">Mr. Robert Fox</h2>
                    <p className="text-gray-600 text-sm">18</p>
                </div>
                <div className='flex justify-between'>
                    <MdOutlineLocationOn />
                    <p className="text-gray-600 text-sm">3517 W. Gray St. Utica, Pennsylvania 57867</p>
                </div>
                <div className="mt-4">
                    <div className='flex justify-between'>

                    <div className="text-gray-600 text-sm">Profile Completed</div>
                    <div className="text-gray-600 text-sm mt-1">76%</div>
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
