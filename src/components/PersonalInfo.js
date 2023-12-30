import React from 'react'

const PersonalInfo = () => {
	return (
		<div className='bg-blue-500 text-white flex justify-between h-20 items-center p-4'>
			<span className='font-bold text-lg'>QuickChat</span>
			<div className='flex justify-between'>
				<img
					src="https://images.unsplash.com/photo-1698785617585-e4e635e0990a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D"
					alt='profile-pic'
					className='w-10 h-10 rounded-full'
				/>
				<span className='font-bold text-lg mx-2'>Lisa</span>
			</div>
		</div>
	)
}

export default PersonalInfo;