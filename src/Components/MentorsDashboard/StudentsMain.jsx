import React from 'react'
import TotalStudents from './StudentsMain/TotalStudents'
import TopPerformerAndGraph from './StudentsMain/TopPerformerAndGraph'

const StudentsMain = () => {
  return (
    <div className='lg:pl-64'>
      
      <TotalStudents/>
      <TopPerformerAndGraph/>
    </div>
  )
}

export default StudentsMain
