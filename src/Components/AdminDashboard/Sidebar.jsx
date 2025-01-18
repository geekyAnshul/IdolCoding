import React from 'react';
import { Compass } from 'lucide-react';

function Sidebar({ menuItems, activeTab, setActiveTab }) {

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6 flex items-center gap-2">
        <Compass className="h-8 w-8 text-blue-600" />
        <img src="" alt="Perfect Travels Logo" />
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-6 py-3 text-left
              ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}


export default Sidebar;