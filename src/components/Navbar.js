import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-blue-600 text-white px-8 py-4 shadow-xl'>
            <h1 className='text-3xl font-bold cursor-pointer'>
                <Link to={"/"}>QuickChat</Link>
            </h1>
            <ul className='flex text-2xl font-bold'>
                <li className='mx-2 cursor-pointer'>
                    <Link to={"/login"}>Login</Link>
                </li>
                <li className='mx-2 cursor-pointer'>
                    <Link to={"/signup"}>SignUp</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;