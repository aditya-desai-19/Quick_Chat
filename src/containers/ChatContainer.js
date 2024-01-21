import React, {useState, useContext } from 'react';
import ChatBar from '../components/ChatBar';
import Chat from '../components/Chat';
import UserContext from '../utils/UserContext';
import ChatContext from '../utils/ChatContext';
import NoChat from '../components/NoChat';
import ScreenContext from '../utils/ScreenContext';

const ChatContainer = () => {
	const [showChat, setShowChat] = useState(false);
	const { user } = useContext(UserContext);
	const {contactUser} = useContext(ChatContext);
	
	const handleChat = () => {
		setShowChat(!showChat);
	}

	return (
		<ScreenContext.Provider value={{showChat, handleChat}}>
			{user ?
				<div className='flex mx-auto w-[80%] h-2/3 mt-12 border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg max-md:flex-col max-md:overflow-y-auto'>
					<ChatBar />
					{contactUser ? <Chat /> :<NoChat />}
				</div> :
				<h1 className='text-3xl font-bold text-center my-4'>Sign in first</h1>
			}
		</ScreenContext.Provider>
	)
}

export default ChatContainer;