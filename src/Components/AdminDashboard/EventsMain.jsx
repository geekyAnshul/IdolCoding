import React from 'react'
import EventsList from './Events/EventsList'
import EventsGraph from './Events/EventsGraph'
import CalenderAndAttendace from './Events/CalenderAndAttendace'
import Calendar from './DashboardCompo/Calendar'

const EventsMain = () => {
  return (
    <div className='pl-64 flex '>
       <div className='w-[40%]'>
       <EventsList/>
       </div>
       <div className='w-[80%]'>
       <EventsGraph/>
       <CalenderAndAttendace/>
       {/* <Calendar/> */}
       </div>
    </div>
  )
}

export default EventsMain