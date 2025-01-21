// import React from 'react'

// const MainAdminDashboard = () => {
//   return (
//     <div>MainAdminDashboard</div>
//   )
// }
// export default MainAdminDashboard



import React, { useState } from 'react';
import MainAdminDashboardPage from './MainAdminDashboardCompo/MainAdminDashboardPage';
import MainAdminMessagePage from './MainAdminMessageCompo/MainAdminMessagePage';
import MainAdminStudentPage from './MainAdminStudentsCompo/MainAdminStudentPage';
import MaiinAdminMentorsPage from './MainAdminMentorsCompo/MaiinAdminMentorsPage';
import MainAdminEveentsPage from './MainAdminEventsCompo/MainAdminEveentsPage';
import MainAdminCommunityPage from './MainAdminCommunityCompo/MainAdminCommunityPage';
import MainAdminSettingPage from './MainAdminSettingPage';
import MainAdminPaymentsPage from './MainAdminPaymentsPage';


function MainAdminDashboard({ activeTab }) {


    return (
        <div className=' '>
            <div className=''>
                {activeTab === 'dashboard' && (
                    <div>
                        <div className=''>
                            <MainAdminDashboardPage />
                        </div>
                    </div>
                )}

                {activeTab === 'messages' && (
                    <div>
                        {/* <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2> */}
                        <MainAdminMessagePage/>
                    </div>
                )}

                {activeTab === 'students' && (
                    <div>
                        {/* <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2> */}
                        <MainAdminStudentPage />
                    </div>
                )}



                {activeTab === 'mentors' && (
                    <div>
                        {/* <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2> */}
                        <MaiinAdminMentorsPage />
                    </div>
                )}

                 {activeTab === 'events' && (
                    <div>
                        {/* <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2> */}
                        <MainAdminEveentsPage />
                    </div>
                )}
                 {activeTab === 'community' && (
                    <div>
                        {/* <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2> */}
                        <MainAdminCommunityPage/>
                    </div>
                )}

                 {activeTab === 'payments' && (
                    <div>
                        {/* <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2> */}
                        <MainAdminPaymentsPage />
                    </div>
                )}     

                {activeTab === 'settings' && (
                    <div>
                        {/* <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2> */}
                        <MainAdminSettingPage />
                    </div>
                )}


            </div>

        </div>
    );
}

export default MainAdminDashboard;