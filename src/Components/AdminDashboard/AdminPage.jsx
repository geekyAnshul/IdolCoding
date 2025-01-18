import React from 'react'
import { useState } from 'react';
import { LayoutDashboard, Package, Users, Map, Settings, LogOut } from 'lucide-react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';


const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { id: 'packages', label: 'Packages', icon: <Package size={20} /> },
        { id: 'customers', label: 'Customers', icon: <Users size={20} /> },
        { id: 'itinerary', label: 'Itinerary', icon: <Map size={20} /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
    ];
  return (
    <div className="flex h-screen bg-gray-100">
            <Sidebar menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex-1 overflow-auto">
                <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
                    <button className="flex items-center text-gray-600 hover:text-gray-800">
                        <LogOut size={20} className="mr-2" />
                        Logout
                    </button>
                </nav>
                <main className="p-6">
                    <Dashboard activeTab={activeTab} />
                </main>
            </div>
        </div>
  )
}

export default AdminPage
