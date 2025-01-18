import React from 'react';
import boygirl from '../../assets/boygirl.png';
import Calender from '../AdminDashboard/DashboardCompo/Calendar';
import Attendance from '../AdminDashboard/DashboardCompo/AttendancePieChart';
import CourseProgress from './DashboardCompo/CourseProgress';
import PerformanceGraph from './DashboardCompo/PerformanceBarGraph';
import UpcommingClasses from './DashboardCompo/UpcommingClasses';

const DashboardPage = () => {
    return (
        <div className=' bg-gray-100 pl-64'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {/* Left Column */}
                <div className='lg:col-span-2 space-y-6'>
                    {/* Welcome Banner */}
                    <div className='flex bg-[#12b76a] p-6 rounded-lg shadow-md justify-between items-center'>
                        <div>
                            <h1 className='text-4xl font-bold text-white'>Welcome, Pratik</h1>
                            <p className='text-white mt-2'>
                                You’ve learned <span className='font-bold'>70%</span> of your goal this week! Keep it up and improve your progress.
                            </p>
                        </div>
                        <div>
                            <img src={boygirl} alt='Welcome' className='h-48 w-60' />
                        </div>
                    </div>

                    {/* Performance Graph */}
                    <div className=''>
                        <PerformanceGraph />
                    </div>

                    {/* Attendance and Course Progress */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='bg-white p-6 rounded-lg shadow-md'>
                            <Attendance />
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow-md'>
                            <CourseProgress />
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className='space-y-6'>
                    {/* Calendar */}
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <Calender />
                    </div>

                    {/* Upcoming Classes */}
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <UpcommingClasses />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
