import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className='bg-gray-100 h-screen'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default App;