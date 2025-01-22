


import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import { Plus } from 'lucide-react'
import { FaSearch } from 'react-icons/fa';
import MentorsCard from '../MainAdminStudentsCompo/MentorsCard'
import StudentPerformance from '../MainAdminStudentsCompo/StudentPerformance';
import StudentCard from './StudentCard';

const MaiinAdminMentorsPage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to track input value
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value); // Log the input value to the console
  };
  return (
    <div className='lg:pl-64'>

      <div className="flex flex-col lg:flex-row justify-between items-center mb-4 p-4 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-900 font-medium">Dashboard</span>
          <span className="text-gray-400">/</span>
          <span className="text-emerald-500">Mentors</span>
        </div>
        <div className="flex items-center w-full max-w-md bg-[#fff9ee] rounded-full px-4 py-3 border border-green-300">
          <FaSearch className="text-gray-300 text-md mr-3" /> {/* Search icon */}
          <input
            type="text"
            placeholder="Search Anything..."
            value={searchTerm}
            onChange={handleInputChange}
            className="flex-grow bg-transparent focus:outline-none text-gray-700 lg:text-md placeholder-gray-500"
          />
        </div>
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-600 transition-colors">
          <Plus size={20} />
          Add Class
        </button>
      </div>

      <div className='flex flex-col gap-6'>
        <div className='flex flex-col lg:flex-row gap-4 w-full'>
          <div className='w-full lg:w-2/5 px-2'>
            <ProfileCard />
          </div>
          <div className='w-full lg:w-3/5'>
            <StudentPerformance />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-4 w-full'>
          <div className='w-full lg:w-1/2'>
            <StudentCard />
          </div>
          <div className='w-full lg:w-1/2'>
            <MentorsCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaiinAdminMentorsPage