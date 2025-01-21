


import React, { useState } from "react";
import { Compass, LogOut, Menu, X } from "lucide-react";

function Sidebar({ menuItems, activeTab, setActiveTab }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative">
      {/* Menu Icon for Small Devices */}
      <button
        className="fixed top-4 left-4 z-50 bg-green-600 text-white p-2 rounded-md lg:hidden"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg shadow-gray-400 w-64 z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="px-4 pt-5 flex items-center justify-between">
          <h1 className="text-[#12B76A] text-2xl font-semibold text-center ml-10">CODINGIDOL</h1>
          <button
            className="lg:hidden text-gray-600"
            onClick={closeSidebar}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mt-14 px-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                closeSidebar();
              }}
              className={`w-full rounded-lg flex text-lg items-center gap-8 mt-4 px-10 py-2 text-right ${
                activeTab === item.id
                  ? "bg-green-600 text-right text-white border-r-4 border-green-600"
                  : "text-gray-600 text-right hover:bg-gray-50"
              }`}
            >
              {item.icon}
              <span className="text-left">{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="w-56 mx-auto mt-20 py-3 px-10 flex items-center justify-center text-white bg-red-500 hover:bg-red-600 hover:scale-105 duration-300 hover:text-gray-200 rounded-lg">
          <LogOut size={20} className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

