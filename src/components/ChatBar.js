import React, { useContext } from 'react'
import PersonalInfo from './PersonalInfo';
import Users from './Users';
import ScreenContext from '../utils/ScreenContext';

const ChatBar = () => {
	const { showChat } = useContext(ScreenContext);

	return (
		<div className={`flex flex-col w-60 md:w-52 ${!showChat ? 'max-md:w-full max-md:h-full' : 'max-md:hidden'} bg-blue-300`}>
			<PersonalInfo />
			<Users />
		</div>
	)
}

export default ChatBar;