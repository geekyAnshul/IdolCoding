import React from 'react'
import { useState } from 'react';
import { LayoutDashboard, Package, Users, Map , Sun, Settings, LogOut, BookOpen, MessageCircleMore, CalendarDays, Lightbulb, BadgeIndianRupee, ClipboardCheck } from 'lucide-react';
import Sidebar from './Sidebar';
import RoutesPage from './RoutesPage';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const MentorsPage = ({name}) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState(""); // State to track input value
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value); // Log the input value to the console
  };
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'classroom', label: 'Classroom', icon: <BookOpen size={20} /> },
    { id: 'messages', label: 'Messages', icon: <MessageCircleMore size={20} /> },
    { id: 'students', label: 'Students', icon: <Users size={20} /> },
    { id: 'events', label: 'Events', icon: <CalendarDays size={20} /> },
    { id: 'community', label: 'Community', icon: <Sun  size={20} /> },
    { id: 'payments', label: 'Payments', icon: <BadgeIndianRupee size={20} /> },
    { id: 'my tasks', label: 'My Tasks', icon: <ClipboardCheck size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },

  ];
  return (
    <div className="flex h-screen bg-white ">
      <Sidebar menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-auto ">
        <nav className="bg-white fixed w-full z-40 px-6 py-3 flex justify-between items-center shadow-md shadow-gray-300">
          <h1 className="text-xl font-medium text-gray-800 ml-64 hidden lg:block">Dashboard</h1>

          <div className="flex items-center w-full xs:max-w-52  lg:max-w-md xs:ml-12 lg:ml-0  bg-[#fff9ee] rounded-full px-4  py-3">
            <FaSearch className="text-gray-300 text-md mr-3" /> {/* Search icon */}
            <input
              type="text"
              placeholder="Search Anything..."
              value={searchTerm}
              onChange={handleInputChange}
              className="flex-grow bg-transparent focus:outline-none text-gray-700 lg:text-md placeholder-gray-500"
            />
          </div>

          {/* User Section */}
          <div className="flex gap-2 items-center">
            {/* User Image */}
            <img
              src="https://th.bing.com/th/id/OIP.00EZFelvsBIyIDmZfQGGBAHaFY?w=604&h=439&rs=1&pid=ImgDetMain"
              alt="User"
              className="w-10 h-10 cursor-pointer rounded-full object-cover"
            />

            {/* User Info (Visible on larger screens) */}
            <div className="hidden lg:block">
              <h2 className="text-md font-medium text-gray-800">Himanshu Gupta</h2>
              <select
  className="hidden lg:block text-sm text-gray-600 bg-white rounded-full cursor-pointer"
  onChange={(e) => navigate(`/${e.target.value}`)} 
>
<option value="mentors">Mentor</option>
  <option value="students">Student</option>
  
  <option value="admin">Admin</option>
</select>
            </div>
          




          </div>
        </nav>

        <main className="p-6 pt-24">
          <RoutesPage activeTab={activeTab} />
        </main>
      </div>
    </div>
  )
}

export default MentorsPage
