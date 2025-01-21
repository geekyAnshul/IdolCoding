import React from 'react'
import CardsSection from './Dashboard/CardsSection'
import AreaGraph from './Dashboard/AreaGraph'
import Calendar from './Dashboard/Calendar'
import UpCommingLectures from './Dashboard/UpCommingLectures'
import PieChart from './Dashboard/PieChart'

const DashboardPage = () => {
  return (
    <div className='lg:pl-64'>
        <CardsSection/>

        <div className='flex flex-col lg:flex-row gap-2 '>
            <div className='lg:w-[70%]'>
            <AreaGraph/>
            </div>
            <div className='lg:w-[40%]'>
            <Calendar/>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-2 '>
            <div className='lg:w-[70%]'>
            <UpCommingLectures/>
            </div>
            <div className='lg:w-[40%]'>
            <PieChart/>
            </div>
        </div>
    </div>
  )
}

export default DashboardPage