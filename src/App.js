import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from './utils/UserContext';
import ChatContext from './utils/ChatContext';

const App = () => {
    const [user, setUser] = useState(null);
    const [contactUser, setContactUser] = useState(null);

    const getUser = (user) => {
        setUser(user);
    }

    const logOutUser = () => {
        setUser(null);
    }

    const setUserContactInfo = (searchedUser) => {
        setContactUser(searchedUser);
    }

    return (
        <UserContext.Provider value={{ user, getUser, logOutUser }}>
            <ChatContext.Provider value={{setUserContactInfo, contactUser}}>
                <div className='bg-gray-100 h-screen'>
                    <Navbar />
                    <Outlet />
                    <ToastContainer />
                </div>
            </ChatContext.Provider>
        </UserContext.Provider>
    )
}

export default App;