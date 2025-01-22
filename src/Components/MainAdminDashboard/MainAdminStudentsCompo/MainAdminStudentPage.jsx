import React from 'react'
import MentorsCard from './MentorsCard'
import OtherStudents from './OtherStudents'
import ProfileCard from './ProfileCard'

const MainAdminStudentPage = () => {
  return (
    <div className='pl-64'>MainAdminStudentPage
    <ProfileCard/>
    <MentorsCard />
    <OtherStudents />
    </div>
  )
}

export default MainAdminStudentPage