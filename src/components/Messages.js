import React from 'react'

const Messages = () => {
    return (
        <div className='h-[calc(100%-154px)] p-2 overflow-y-auto'>
            <div className='flex items-center'>
                <div className='flex flex-col'>
                    <img
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
                        alt='profile-pic'
                        className='w-14 h-14 rounded-full my-1'
                    />
                    <span className='text-sm'>Just Now</span>
                </div>
                <p className='mx-2 bg-slate-900 text-white h-10 max-h-24 max-w-32 rounded-r-lg rounded-b-lg p-2'>Hello</p>
            </div>
            <div className='flex items-center flex-row-reverse'>
                <div className='flex flex-col'>
                    <img
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
                        alt='profile-pic'
                        className='w-14 h-14 rounded-full my-1'
                    />
                    <span className='text-sm'>Just Now</span>
                </div>
                <p className='mx-2 bg-blue-500 text-white h-10 max-h-24 max-w-32 rounded-l-lg rounded-b-lg p-2'>Hello</p>
            </div>
        </div>
    )
}

export default Messages;