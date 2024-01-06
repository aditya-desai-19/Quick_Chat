import React, { useContext } from 'react';
import ChatBar from '../components/ChatBar';
import Chat from '../components/Chat';
import UserContext from '../utils/UserContext';
import ChatContext from '../utils/ChatContext';
import NoChat from '../components/NoChat';

const ChatContainer = () => {
	const { user } = useContext(UserContext);
	const {contactUser} = useContext(ChatContext);
	
	return (
		<>
			{user ?
				<div className='flex mx-auto w-2/3 h-2/3 mt-12 border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg'>
					<ChatBar />
					{contactUser ? <Chat /> :<NoChat />}
				</div> :
				<h1 className='text-3xl font-bold text-center my-4'>Sign in first</h1>
			}
		</>
	)
}

export default ChatContainer;