import React from "react";

const UserInfo = ({ user, onClick }) => {
	return (
		<div className="flex items-center my-2 p-2 text-white hover:bg-blue-600 cursor-pointer" onClick={onClick}>
			<img
				src={user.photoURL}
				alt="profile-pic"
				className="w-14 h-14 rounded-full"
			/>
			<span className="font-bold text-lg mx-2">{user.displayName}</span>
		</div>
	);
};

export default UserInfo;
