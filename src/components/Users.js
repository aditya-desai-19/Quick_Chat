import React from 'react'
import UserInfo from './UserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Users = () => {
	return (
		<div>
			<div className='flex items-center px-2 border-b-2 border-gray-100'>
				<input
					type="text"
					placeholder="Search users..."
					className='bg-transparent p-2 my-2 w-full placeholder:text-gray-100 focus:outline-none text-white text-lg'
				/>
				<FontAwesomeIcon icon={faSearch} className='text-white text-xl' />
			</div>
			<div>
				<UserInfo />
			</div>
		</div>
	)
}

export default Users