import React, { useState, useEffect, useContext } from 'react'
import UserInfo from './UserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import { collection, query, where, getDocs, getDoc, doc, setDoc, updateDoc, serverTimestamp, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import UserContext from '../utils/UserContext';
import ChatContext from '../utils/ChatContext';

const Users = () => {
	const [isSearch, setIsSearch] = useState(false);
	const [searchName, setSearchName] = useState("");
	const [contactUser, setContactUser] = useState(null);
	const [err, setErr] = useState(false);
	const [chats, setChats] = useState([]);
	const { user } = useContext(UserContext);
	const { setUserContactInfo } = useContext(ChatContext);

	useEffect(() => {
		const timeOut = setTimeout(() => setErr(false), 5000);

		return () => {
			clearTimeout(timeOut);
		};
	}, [err === true]);

	useEffect(() => {
		user.uid && getChats();
	}, [user.uid]);

	const getChats = () => {
		const unsub = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
			setChats(doc.data());
		});

		return () => {
			unsub()
		};
	}

	const handleChange = (e) => {
		setSearchName(e.target.value);
	}

	const searchUser = async () => {
		setIsSearch(true);
		const q = query(collection(db, "users"), where("displayName", "==", searchName));

		try {
			const result = await getDocs(q);
			result.forEach((doc) => {
				setContactUser(doc.data());
			});
		} catch (error) {
			setErr(true);
		} finally {
			setIsSearch(false);
		}
	}

	const handleKeyDown = (e) => {
		e.key === 'Enter' && searchUser();
	}

	const handleSelect = async () => {
		if (contactUser) {
			//check if chat exist if not then create a new one
			const combinedId = user.uid > contactUser.uid ? user.uid + contactUser.uid : contactUser.uid + user.uid;

			try {
				const docRef = doc(db, "chats", combinedId);
				const res = await getDoc(docRef);
				if (!res.exists()) {
					await setDoc(docRef, { messages: [] });

					//update doc for userChats
					await updateDoc(doc(db, "userChats", user.uid), {
						[combinedId + ".userInfo"]: {
							uid: contactUser.uid,
							displayName: contactUser.displayName,
							photoURL: contactUser.photoURL
						},
						[combinedId + ".date"]: serverTimestamp()
					});

					await updateDoc(doc(db, "userChats", contactUser.uid), {
						[combinedId + ".userInfo"]: {
							uid: user.uid,
							displayName: user.displayName,
							photoURL: user.photoURL
						},
						[combinedId + ".date"]: serverTimestamp()
					});
				}
			} catch (error) {
				console.log(error);
			}

			setUserContactInfo(contactUser)
			setSearchName("");
		}
	}

	const handleUserSelect = (contactUser) => {
		setUserContactInfo(contactUser);
	}

	return (
		<div data-testid="users">
			<div className='flex items-center px-2 border-b-2 border-gray-100'>
				<input
					type="text"
					placeholder="Search users..."
					className='bg-transparent p-2 my-2 w-full placeholder:text-gray-100 focus:outline-none text-white text-lg'
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					value={searchName}
				/>
				{searchName === ""? 
					<FontAwesomeIcon icon={faSearch} className='text-white text-xl cursor-pointer' onClick={() => searchUser()}/> :
					<FontAwesomeIcon icon={faXmark} className='text-white text-xl cursor-pointer' onClick={() => setSearchName('')}/>
				}
			</div>
			{err && <span className='text-lg text-white'>User not found...</span>}
			<div>
				{isSearch && <span className='text-lg text-white'>Searching user...</span>}
				{contactUser ? <UserInfo user={contactUser} onClick={handleSelect} /> :
					Object.entries(chats).map((chat) =>
						<UserInfo key={chat[0]} user={chat[1].userInfo} onClick={() => handleUserSelect(chat[1].userInfo)} />
					)
				}
			</div>
		</div>
	)
}

export default Users