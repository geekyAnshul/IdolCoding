import React, { useState } from 'react';
// import RecentTour from './RecentTour';
// import Chart from 'react-apexcharts'
// import RecentActivity from './RecentActivity';
import DashboardPage from './DashboardPage';
import PackageForm from './PackageForm';
import { Package, Users, MapPin, Calendar, MoreVertical } from 'lucide-react';


function Dashboard({ activeTab }) {


    const stats = [
        { label: 'Total Packages', value: '24', icon: <Package className="h-6 w-6 text-blue-600" /> },
        { label: 'Active Bookings', value: '156', icon: <Calendar className="h-6 w-6 text-green-600" /> },
        { label: 'Total Customers', value: '1,204', icon: <Users className="h-6 w-6 text-purple-600" /> },
        { label: 'Destinations', value: '18', icon: <MapPin className="h-6 w-6 text-orange-600" /> },
    ];

    return (
        <div className=' '>
            <div className=''>
                {activeTab === 'dashboard' && (
                    <div>
                        

                        <div className=''>
                            <DashboardPage />
                        </div>
                    </div>
                )}

                {activeTab === 'packages' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2>
                        <PackageForm />
                    </div>
                )}


            </div>

        </div>
    );
}

export default Dashboard;