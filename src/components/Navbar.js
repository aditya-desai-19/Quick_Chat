import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { user, logOutUser } = useContext(UserContext);

    const handleLogOut = async () => {
        handleMenu();
        try {
            await signOut(auth);
            logOutUser();
            toast.success("Successfully logged out");
            handleMenu();
        } catch (error) {
            toast.error("Some error occurred");
        }
    }

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <div className='flex justify-between items-center bg-blue-600 text-white px-8 py-4 shadow-xl'>
                <h1 className='text-xl font-bold cursor-pointer font-lato'>
                    <Link to={"/"}>Quickchat</Link>
                </h1>
                <ul className="flex text-xl font-bold max-md:hidden">
                    {user !== null ?
                        <>
                            <li className='mx-2 cursor-pointer font-lato'>
                                <Link to={"/chat"}>Chat</Link>
                            </li>
                            <li className='mx-2 cursor-pointer font-lato' onClick={handleLogOut}>
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
                <button className='md:hidden'>
                    <FontAwesomeIcon icon={faBars} className='text-xl' onClick={handleMenu} />
                </button>
            </div>
            {showMenu &&
                <div>
                    <ul className="text-xl font-bold bg-blue-600 text-white px-8 shadow-xl md:hidden">
                        {user !== null ?
                            <>
                                <li className='py-2 cursor-pointer font-lato' onClick={handleMenu}>
                                    <Link to={"/chat"}>Chat</Link>
                                </li>
                                <li className='py-2 cursor-pointer font-lato' onClick={handleLogOut}>
                                    Sign out
                                </li>
                            </> :
                            <>
                                <li className='py-2 cursor-pointer' onClick={handleMenu}>
                                    <Link to={"/login"}>Sign in</Link>
                                </li>
                                <li className='py-2 cursor-pointer' onClick={handleMenu}>
                                    <Link to={"/signup"}>Sign up</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            }
        </>
    )
}

export default Navbar;