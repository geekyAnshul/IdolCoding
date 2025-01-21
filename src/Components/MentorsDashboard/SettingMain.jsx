

import React from 'react'
import { Plus } from 'lucide-react';
import MainAdminGeneralDetails from '../MainAdminDashboard/MainAdminSettingCompo/MainAdminGeneralDetails';
import MainAdminNotification from '../MainAdminDashboard/MainAdminSettingCompo/MainAdminNotification';

const SettingMain = () => {
  return (
    <div>
      <div className="lg:pl-64 flex justify-between items-center mb-4 pr-8">
        <div className="flex items-center gap-2">
          <span className="text-gray-900 font-medium">Dashboard</span>
          <span className="text-gray-400">/</span>
          <span className="text-emerald-500">Classroom</span>
        </div>
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-600 transition-colors">
          <Plus size={20} />
          Add Class
        </button>
      </div>
      <div className='lg:pl-64 flex xs:flex-col lg:flex-row'>

        <div className='lg:w-[30%]'>
          <MainAdminGeneralDetails />
        </div>

        <div className='lg:w-[70%]'>
          <MainAdminNotification />
        </div>
      </div>
    </div>
  )
}

export default SettingMain