import React from 'react'
import LineGraph from './ClassRoom/LineGraph'
import AssignmentsTable from './ClassRoom/AssignmentsTable'

const ClassRoom = () => {
  return (
    <div className='pl-64 '>
      
      <LineGraph/>
      <AssignmentsTable/>
    </div>
  )
}

export default ClassRoom