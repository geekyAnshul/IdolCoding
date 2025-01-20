import React from 'react'
import GeneralDetails from './Settings/GeneralDetails'
import Notification from './Settings/Notification'

const SettingMain = () => {
  return (
    <div className='pl-64 flex '>
        <div className='w-[30%]'>
        <GeneralDetails/>
        </div>

        <div className='w-[70%]'>
            <Notification/>
        </div>
    </div>
  )
}

export default SettingMain