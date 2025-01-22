

// import React from 'react';
// import { MdOutlineLocationOn } from "react-icons/md";
// import { RiAwardFill } from "react-icons/ri";

// const ProfileCard = () => {
//     return (
//         <div className="max-w-xl mx-auto bg-white rounded-xl overflow-hidden border-2 border-[#C2B0B0]  py-4">
//             <div className="bg-cover bg-center h-54 px-2" >
//                 <div className="flex justify-center border-2 border-green-300 rounded-xl">
//                     <img src="https://th.bing.com/th?id=OIP.PoFmgWG0dZXmssCtCiBk9QHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Profile"
//                         className='h-52 w-[90%] object-cover object-top' />
//                 </div>
//             </div>
//             <div className="p-4">
//                 <div className='flex justify-between'>
//                     <h2 className="text-gray-900 text-xl font-bold">Mr. Robert Fox</h2>
//                     <div className='flex gap-2 text-xl items-center'>
//                         <RiAwardFill className='text-green-600' />
//                         <p className="text-gray-600 ">18</p>
//                     </div>
//                 </div>
//                 <div className='flex justify-between gap-2'>
//                     <MdOutlineLocationOn className='text-2xl' />
//                     <p className="text-gray-600 text-sm">3517 W. Gray St. Utica, Pennsylvania 57867</p>
//                 </div>
//                 <div className="mt-4">
//                     <div className='flex justify-between'>

//                         <div className=" text-md text-green-600 ">Profile Completed</div>
//                         <div className="text-green-600 text-sm mt-1">76%</div>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2.5">
//                         <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '76%' }}></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProfileCard;


import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import { RiAwardFill } from "react-icons/ri";

const ProfileCard = () => {
    return (
        <div className="max-w-xl mx-auto bg-white rounded-xl overflow-hidden border-2 border-[#C2B0B0] py-4">
            <div className="bg-cover bg-center h-54 px-2">
                <div className="flex justify-center border-2 border-green-300 rounded-xl">
                    <img src="https://th.bing.com/th?id=OIP.PoFmgWG0dZXmssCtCiBk9QHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Profile"
                        className='h-52 w-full object-cover object-top rounded-xl' />
                </div>
            </div>
            <div className="p-4">
                <div className='flex flex-col sm:flex-row justify-between'>
                    <h2 className="text-gray-900 text-xl font-bold">Mr. Robert Fox</h2>
                    <div className='flex gap-2 text-xl items-center mt-2 sm:mt-0'>
                        <RiAwardFill className='text-green-600' />
                        <p className="text-gray-600">18</p>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-between gap-2 mt-2'>
                    <div className='flex items-center'>
                        <MdOutlineLocationOn className='text-2xl' />
                        <p className="text-gray-600 text-sm ml-2">3517 W. Gray St. Utica, Pennsylvania 57867</p>
                    </div>
                </div>
                <div className="mt-4">
                    <div className='flex justify-between'>
                        <div className="text-md text-green-600">Profile Completed</div>
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
