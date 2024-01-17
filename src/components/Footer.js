import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-gray-700 p-4' data-testid="footer">
            <p className='font-bold text-white text-sm m-2'>
                &copy;2024 Copyright Quickchat Tech
            </p>
            <a href='https://github.com/aditya-desai-19/Quick_Chat' className='m-2'>
                <FontAwesomeIcon icon={faGithub} className='hover:text-white text-gray-400' />
            </a>
        </div>
    )
}

export default Footer