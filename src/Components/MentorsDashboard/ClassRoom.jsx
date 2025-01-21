import React from 'react'
import ClassesAndAssignments from './ClassRoom/ClassesAndAssignments'
import UpCommingClasses from './ClassRoom/UpCommingClasses'
import MenteesAndCourses from './ClassRoom/MenteesAndCourses'
// import UpcommingClasses from '../AdminDashboard/DashboardCompo/UpcommingClasses'

const ClassRoom = () => {
  return (
    <div className='lg:pl-64'>
          <ClassesAndAssignments/>

          <div className='flex gap-6 '>
            <div className='lg:w-[50%]'>
            <UpCommingClasses/>
            </div>
            <div className='lg:w-[50%]'>
            <MenteesAndCourses/>
            </div>
        </div>
    </div>
  )
}

export default ClassRoom