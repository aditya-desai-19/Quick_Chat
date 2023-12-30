import React from 'react'

const UserInfo = () => {
  return (
    <div className='flex items-center my-2 p-2 text-white hover:bg-blue-600'>
        <img 
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww" 
            alt="profile-pic" 
            className='w-14 h-14 rounded-full'    
            />
        <span className='font-bold text-lg mx-2'>John</span>
    </div>
  )
}

export default UserInfo