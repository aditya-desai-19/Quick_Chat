import React from 'react';
import ChatBar from '../components/ChatBar';
import Chat from '../components/Chat';

const ChatContainer = () => {
  return (
    <div className='flex mx-auto w-2/3 h-2/3 mt-12 border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg'>
        <ChatBar />
        <Chat/>
    </div>
  )
}

export default ChatContainer;