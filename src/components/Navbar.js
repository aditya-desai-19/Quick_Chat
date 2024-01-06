import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOutUser } = useContext(UserContext);

    const handleLogOut = async () => {
        try {
            await signOut(auth);
            logOutUser();
            toast.success("Successfully logged out");
        } catch (error) {
            toast.error("Some error occurred");
        }
    }

    return (
        <div className='flex justify-between items-center bg-blue-600 text-white px-8 py-4 shadow-xl'>
            <h1 className='text-xl font-bold cursor-pointer'>
                <Link to={"/"}>Quickchat</Link>
            </h1>
            <ul className='flex text-xl font-bold'>
                {user !== null ?
                    <>
                        <li className='mx-2 cursor-pointer'>
                            <Link to={"/chat"}>Chat</Link>
                        </li>
                        <li className='mx-2 cursor-pointer' onClick={handleLogOut}>
                            Sign out
                        </li>
                    </> :
                    <>
                        <li className='mx-2 cursor-pointer'>
                            <Link to={"/login"}>Sign in</Link>
                        </li>
                        <li className='mx-2 cursor-pointer'>
                            <Link to={"/signup"}>Sign up</Link>
                        </li>
                    </>
                }
            </ul>
        </div>
    )
}

export default Navbar;