import React, { useState } from 'react';
import DashboardPage from './DashboardPage';
// import { Package, Users, MapPin, Calendar, MoreVertical } from 'lucide-react';
import ClassRoom from './ClassRoom';
// import MentorsMain, { StudentsMain } from './StudentsMain.jsx';
import EventsMain from './EventsMainMentors.jsx';
import SettingMain from './SettingMain';
import Messages from './Message/Messages';
import Community from './Community/Community.jsx'
// import Task from './MYTask/Task'
import StudentsMain from './StudentsMain.jsx';
import EventsMainMentors from './EventsMainMentors.jsx';
import MentorPayment from './MentorPayment.jsx';
import MentorTask from './MentorTask.jsx';


function RoutesPage({ activeTab }) {


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

                {activeTab === 'classroom' && (
                    <div>
                        {/* <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2> */}
                        <ClassRoom />
                    </div>
                )}

                {activeTab === 'messages' && (
                    <div>
                        {/* <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2> */}
                        <Messages />
                    </div>
                )}



                {activeTab === 'community' && (
                    <div>
                        {/* <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2> */}
                        <Community />
                    </div>
                )}

                 {activeTab === 'students' && (
                    <div>
                        {/* <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2> */}
                        <StudentsMain />
                    </div>
                )}
                 {activeTab === 'payments' && (
                    <div>
                        {/* <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2> */}
                        <MentorPayment/>
                    </div>
                )}

                 {activeTab === 'events' && (
                    <div>
                        {/* <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2> */}
                        <EventsMainMentors />
                    </div>
                )}     

                {activeTab === 'settings' && (
                    <div>
                        {/* <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2> */}
                        <SettingMain />
                    </div>
                )}


                {activeTab === 'my tasks' && (
                    <div>
                        {/* <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2> */}
                        <MentorTask/>
                    </div>
                )}


            </div>

        </div>
    );
}

export default RoutesPage;