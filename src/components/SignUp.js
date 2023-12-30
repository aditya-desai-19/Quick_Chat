import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const redirectToLogin = () => {
        navigate("/login");
    };

    return (
        <div className='flex flex-col justify-center h-2/3 items-center'>
            <div className='border-2 border-gray-300 p-4 text-center shadow-xl bg-white'>
                <h2 className='text-2xl font-bold text-gray-800'>Sign Up</h2>
                <form className='flex flex-col justify-center items-center'>
                    <input type="text" placeholder='Name' className='border-2 border-gray-300 m-2 w-64 p-2 rounded-md' />
                    <input type="email" placeholder='Email' className='border-2 border-gray-300 m-2 w-64 p-2 rounded-md' />
                    <input type="password" placeholder='Password' className='border-2 border-gray-300 m-2 w-64 p-2 rounded-md' />
                    <input type="file" className='m-2 hidden' id='display-pic'/>
                    <label htmlFor='display-pic' style={{display: 'flex', gap: 10, alignItems: 'center', cursor: 'pointer', marginTop: 10}}>
                        <FontAwesomeIcon icon={faImage} size='3x'/>
                        <span className='text-gray-800'>Select display pic</span>
                    </label>
                    <button type="submit" className='bg-blue-500 rounded-lg text-white p-2 m-4'>Submit</button>
                </form>
                <p className='text-gray-800 cursor-pointer' onClick={redirectToLogin}>
                    Already a user? <span className='font-bold text-gray-800'>Login</span>
                </p>
            </div>
        </div>
    )
}

export default SignUp;