import React from 'react'
import TopMentorsList from './Mentors/TopMentorsList'
import UpgradeNow from './Mentors/UpgradeNow'
import YourMentors from './Mentors/YourMentors'

const MentorsMain = () => {
  return (
    <div className='lg:pl-64'>
        <div className='flex xs:flex-col lg:flex-row gap-4'>
            <div>
            <TopMentorsList/>
            </div>

            <div>
                <UpgradeNow/>
                <YourMentors/>
            </div>
        </div>
      
    </div>
  )
}

export default MentorsMain