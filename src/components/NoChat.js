import React from 'react'

const NoChat = () => {
    return (
        <div className='flex-1 w-1/2 border-l-2 border-gray-300 max-md:hidden'>
            <div className=' bg-blue-500 h-20 p-4'></div>
            <div className='flex flex-col justify-center items-center h-[calc(100%-154px)]'>
                <p className='text-xl font-bold text-gray-500'>No chat to display...</p>
                <p className='text-xl font-bold text-gray-500'>Select a person</p>
            </div>
        </div>
    )
}

export default NoChat