import React from 'react'
import EventsList from './Events/EventsList'
import EventsGraph from './Events/EventsGraph'
import CalenderAndAttendace from './Events/CalenderAndAttendace'
import Calendar from './DashboardCompo/Calendar'

const EventsMain = () => {
  return (
    <div className='lg:pl-64 flex xs:flex-col lg:flex-row '>
       <div className='lg:w-[40%]'>
       <EventsList/>
       </div>
       <div className='lg:w-[80%]'>
       <EventsGraph/>
       <CalenderAndAttendace/>
       {/* <Calendar/> */}
       </div>
    </div>
  )
}

export default EventsMain