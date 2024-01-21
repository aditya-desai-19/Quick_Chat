import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';

const PersonalInfo = () => {
	const { user } = useContext(UserContext);

	return (
		<div className='bg-blue-500 text-white flex justify-between h-20 items-center p-4 md:p-2'>
			<span className='font-bold text-lg'>QuickChat</span>
			<div className='flex justify-between'>
				<img
					src={user.photoURL}
					alt='profile-pic'
					className='w-10 h-10 rounded-full'
				/>
				<span className='font-bold text-lg mx-2'>{user.displayName}</span>
			</div>
		</div>
	)
}

export default PersonalInfo;