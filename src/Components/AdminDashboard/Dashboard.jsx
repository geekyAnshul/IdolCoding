import React, { useState } from 'react';
import DashboardPage from './DashboardPage';
// import { Package, Users, MapPin, Calendar, MoreVertical } from 'lucide-react';
import ClassRoom from './ClassRoom';
import MentorsMain from './MentorsMain';
import EventsMain from './EventsMain';
import SettingMain from './SettingMain';
import Messages from './Message/Messages';
import Comunity from './Community/Comunity'
import Payments from './Payments'
import Task from './MYTask/Task'


function Dashboard({ activeTab }) {


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
                        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2>
                        <ClassRoom />
                    </div>
                )}

                {activeTab === 'messages' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2>
                        <Messages />
                    </div>
                )}



                {activeTab === 'community' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2>
                        <Comunity />
                    </div>
                )}

                 {activeTab === 'mentors' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2>
                        <MentorsMain />
                    </div>
                )}
                 {activeTab === 'payments' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2>
                        <Payments/>
                    </div>
                )}

                 {activeTab === 'events' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2>
                        <EventsMain />
                    </div>
                )}     

                {activeTab === 'settings' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2>
                        <SettingMain />
                    </div>
                )}


                {activeTab === 'my tasks' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Add New Package</h2>
                        <Task />
                    </div>
                )}


            </div>

        </div>
    );
}

export default Dashboard;