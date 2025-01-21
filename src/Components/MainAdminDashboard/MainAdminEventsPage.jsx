// import React from 'react'

// const MainAdminEventsPage = () => {
//   return (
//     <div>MainAdminEventsPage</div>
//   )
// }

// export default MainAdminEventsPage

import React from 'react'
import { Plus } from 'lucide-react'
import EventsMain from '../AdminDashboard/EventsMain'

const MainAdminEventsPage = () => {
  return (
    <div className=''>
      <div className="flex pl-64 justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-900 font-medium">Dashboard</span>
            <span className="text-gray-400">/</span>
            <span className="text-emerald-500">Events</span>
          </div>
          <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-600 transition-colors">
            <Plus size={20} />
            Add Class
          </button>
        </div>
        <EventsMain/>
    </div>
  )
}

export default MainAdminEventsPage