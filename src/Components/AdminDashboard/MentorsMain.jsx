import React from 'react'
import TopMentorsList from './Mentors/TopMentorsList'
import UpgradeNow from './Mentors/UpgradeNow'
import YourMentors from './Mentors/YourMentors'

const MentorsMain = () => {
  return (
    <div className='pl-64'>
        <div className='flex gap-4'>
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