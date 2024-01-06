import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { toast } from 'react-toastify';

const SignUp = () => {
    const [err, setErr] = useState(false);
    const [imgName, setImgName] = useState("Select a display pic");
    const navigate = useNavigate();

    useEffect(() => {
        const timeOut = setTimeout(() => setErr(false), 5000);
        
        return () => {
            clearTimeout(timeOut);
        };
    },[err === true]);

    const redirectToLogin = () => {
        navigate("/login");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const profilePic = e.target[3].files[0];

        if (name === "" || email === "" || password === "") {
            setErr(true);
            return;
        }

        if (profilePic) {
            setImgName(profilePic.name);
        }

        try {
            //create user
            const response = await createUserWithEmailAndPassword(auth, email, password);
            //uploading image and updating name
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, profilePic);
            uploadTask.on(
                (error) => {
                    setErr(true);
                },
                () => {
                    // Handle successful uploads on complete
                    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                        await updateProfile(response.user,{
                            displayName: name,
                            photoURL: downloadURL
                        });

                        //inserting in db
                        await setDoc(doc(db, "users", response.user.uid), {
                            uid: response.user.uid,
                            displayName: name,
                            photoURL: downloadURL
                        });

                        await setDoc(doc(db, "userChats", response.user.uid), {});
                    });
                }
            );
            toast.success("Successfully signed up", {autoClose: 3000});
            redirectToLogin();
        } catch (error) {
            setErr(true);
        }
    }

    return (
        <div className='flex flex-col justify-center h-2/3 items-center'>
            <div className='border-2 border-gray-300 p-4 text-center shadow-xl bg-white'>
                <h2 className='text-2xl font-bold text-gray-800'>Sign Up</h2>
                <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' className='border-2 border-gray-300 m-2 w-64 p-2 rounded-md focus:outline-blue-500' />
                    <input type="email" placeholder='Email' className='border-2 border-gray-300 m-2 w-64 p-2 rounded-md focus:outline-blue-500' />
                    <input type="password" placeholder='Password' className='border-2 border-gray-300 m-2 w-64 p-2 rounded-md focus:outline-blue-500' />
                    <input type="file" className='m-2 hidden' id='display-pic' />
                    <label htmlFor='display-pic' style={{ display: 'flex', gap: 10, alignItems: 'center', cursor: 'pointer', marginTop: 10 }}>
                        <FontAwesomeIcon icon={faImage} size='3x' />
                        <span className='text-gray-800'>{imgName}</span>
                    </label>
                    <button type="submit" className='bg-blue-500 rounded-lg text-white p-2 m-4'>Submit</button>
                </form>
                {err && <span className='text-lg text-red-500'>Some error occured!...</span>}
                <p className='text-gray-800 cursor-pointer' onClick={redirectToLogin}>
                    Already a user? <span className='font-bold text-gray-800'>Sign in</span>
                </p>
            </div>
        </div>
    )
}

export default SignUp;