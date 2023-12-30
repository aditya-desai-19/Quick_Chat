import React from 'react'
import PersonalInfo from './PersonalInfo';
import Users from './Users';

const ChatBar = () => {
  return (
    <div className='flex-initial w-80 bg-blue-300'>
        <PersonalInfo />
        <Users />
    </div>
  )
}

export default ChatBar;