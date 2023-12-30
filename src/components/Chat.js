import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import Messages from './Messages';

const Chat = () => {
    return (
        <div className='flex-1 w-1/2 border-l-2 border-gray-300'>
            <div className='flex justify-between bg-blue-500 h-20 p-4 text-white items-center'>
                <div className='flex items-center'>
                    <img
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
                        alt="user-pic"
                        className='w-12 h-12 rounded-full'
                    />
                    <span className='font-bold text-lg mx-2'>John</span>
                </div>
                <button className='text-xl cursor-pointer'>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
            </div>
            <Messages />
            <div className='flex p-2'>
                <input
                    type="text"
                    placeholder="Type something..."
                    className='p-2 my-2 w-full placeholder:text-gray-600 focus:outline-blue-500 rounded-lg  text-gray-800 text-lg'
                />
                <div className='flex'>
                    <button className='hover:text-blue-500 text-2xl p-2'>
                        <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                    <button className='hover:text-blue-500 text-2xl p-2'>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Chat