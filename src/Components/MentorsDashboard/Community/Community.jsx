import React from 'react'
import Comunity from '../../AdminDashboard/Community/Comunity'
import { Plus } from 'lucide-react'

const Community = () => {
  return (
    <div>
      <div className="flex pl-64 justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-900 font-medium">Dashboard</span>
            <span className="text-gray-400">/</span>
            <span className="text-emerald-500">Community</span>
          </div>
          <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-600 transition-colors">
            <Plus size={20} />
            Add New
          </button>
        </div>
      <Comunity/>
    </div>
  )
}

export default Community