import React from 'react'
import PersonalInfo from './PersonalInfo';
import Users from './Users';

const ChatBar = () => {
  return (
    <div className='flex-initail w-60 bg-blue-300'>
        <PersonalInfo />
        <Users />
    </div>
  )
}

export default ChatBar;