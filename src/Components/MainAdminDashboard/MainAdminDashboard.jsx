
import React, { useState } from 'react';
import MainAdminDashboardPage from './MainAdminDashboardCompo/MainAdminDashboardPage';
import MainAdminMessagePage from './MainAdminMessageCompo/MainAdminMessagePage';
import MainAdminStudentPage from './MainAdminStudentsCompo/MainAdminStudentPage';
import MaiinAdminMentorsPage from './MainAdminMentorsCompo/MaiinAdminMentorsPage';
import MainAdminCommunityPage from './MainAdminCommunityPage';
import MainAdminSettingPage from './MainAdminSettingPage';
import MainAdminPaymentsPage from './MainAdminPaymentsPage';
import MainAdminEventsPage from './MainAdminEventsPage';


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
                        <MainAdminEventsPage />
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