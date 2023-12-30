import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const redirectToSignUp = () => {
        navigate("/signup");
    };

    return (
        <div className='flex flex-col justify-center h-2/3 items-center'>
            <div className='border-2 border-gray-300 p-4 text-center shadow-xl bg-white'>
                <h2 className='text-2xl font-bold text-gray-800'>Login</h2>
                <form className='flex flex-col justify-center items-center'>
                    <input type="email" placeholder='Email' className='border-2 border-gray-300 m-2 w-64 p-2 rounded-md' />
                    <input type="password" placeholder='Password' className='border-2 border-gray-300 m-2 w-64 p-2 rounded-md' />
                    <button type="submit" className='bg-blue-500 rounded-lg text-white p-2 m-4'>Login</button>
                </form>
                <p className='text-gray-800 cursor-pointer' onClick={redirectToSignUp}>
                    New user? <span className='font-bold'>Sign Up</span>
                </p>
            </div>
        </div>
    )
}

export default Login;