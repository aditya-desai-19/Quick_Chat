import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import UserContext from '../utils/UserContext';

const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const { getUser } = useContext(UserContext);

    useEffect(() => {
        const timeOut = setTimeout(() => setErr(false), 5000);
        
        return () => {
            clearTimeout(timeOut);
        };
    },[err === true]);

    const redirectToSignUp = () => {
        navigate("/signup");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        if(email === "" || password === "") {
            setErr(true);
            return;
        }

        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            getUser(response.user);
            toast.success("Successfully logged in", {autoClose: 3000});
            navigate("/");
        } catch (error) {
            console.log(error);
            setErr(true);
            toast.error("Some error occurred", {autoClose: 3000});
        }
    }

    return (
        <div className='flex flex-col justify-center h-2/3 items-center' data-testid="login">
            <div className='border-2 border-gray-300 p-4 text-center shadow-xl bg-white'>
                <h2 className='text-2xl font-bold text-gray-800'>Sign in</h2>
                <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email' className='border-2 border-gray-300 m-2 w-64 p-2 rounded-md focus:outline-blue-500' />
                    <input type="password" placeholder='Password' className='border-2 border-gray-300 m-2 w-64 p-2 rounded-md focus:outline-blue-500' />
                    <button type="submit" className='bg-blue-500 rounded-lg text-white p-2 m-4'>Login</button>
                </form>
                {err && <span className='text-lg text-red-500'>Some error occured!...</span>}
                <p className='text-gray-800 cursor-pointer' onClick={redirectToSignUp}>
                    New user? <span className='font-bold'>Sign Up</span>
                </p>
            </div>
        </div>
    )
}

export default Login;