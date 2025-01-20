import React from 'react'
import GeneralDetails from './Settings/GeneralDetails'
import Notification from './Settings/Notification'

const SettingMain = () => {
  return (
    <div className='lg:pl-64 flex xs:flex-col lg:flex-row'>
        <div className='lg:w-[30%]'>
        <GeneralDetails/>
        </div>

        <div className='Lg:w-[70%]'>
            <Notification/>
        </div>
    </div>
  )
}

export default SettingMain