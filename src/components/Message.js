import React, {useContext, useRef, useEffect, useState} from 'react';
import MessageContext from '../utils/MessageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const Message = ({ message, contactUser, user }) => {
    const { handleDeleteModal } = useContext(MessageContext);
    const [showThreeDotMenu, setShowThreeDotMenu] = useState(false);
    const [showThreeDotMenuItems, setShowThreeDotMenuItems] = useState(false);
    
    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth'});
    }, [message]);

    const handleThreeDotMenu = (value) => {
        setShowThreeDotMenu(value);
    }

    const handleThreeDotMenuItems = () => {
        setShowThreeDotMenuItems(!showThreeDotMenuItems);
    }

    const handleDelete = (message) => {
        setShowThreeDotMenuItems(false);
        handleDeleteModal(message);
    }

    return (
        <div className='cursor-pointer' data-testid="message" ref={ref}>
            {message.senderId === contactUser.uid &&
                <div className='flex items-center'>
                    <div className='flex flex-col'>
                        <img
                            src={message.senderId === contactUser.uid && contactUser.photoURL}
                            alt='profile-pic'
                            className='w-14 h-14 rounded-full my-1'
                        />
                    </div>
                    {message.text ?
                        <p className='mx-2 bg-slate-900 text-white h-10 max-h-24 max-w-32 rounded-r-lg rounded-b-lg p-2'>
                            {message.senderId === contactUser.uid && message.text}
                        </p> :
                        <img
                            src={message.senderId === contactUser.uid && message.img}
                            alt='shared-image'
                            className='w-24 h-24'
                        />
                    }
                </div>
            }
            {message.senderId === user.uid &&
                <div
                    className={`${showThreeDotMenu && 'bg-gray-200'} p-4`}
                    onMouseEnter={() => handleThreeDotMenu(true)}
                    onMouseLeave={() => handleThreeDotMenu(false)}
                >
                    {showThreeDotMenu && 
                        <button className='my-auto float-left text-lg' onClick={handleThreeDotMenuItems}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    }
                    {showThreeDotMenu && showThreeDotMenuItems && 
                        <div className='float-left my-auto bg-white mx-2 p-2 rounded-lg'>
                            <p className='cursor-pointer my-2' onClick={() => handleDelete(message)}>Delete Message</p>
                        </div>
                    }
                    <div className='flex items-center flex-row-reverse'>
                        <div className='flex flex-col'>
                            <img
                                src={message.senderId === user.uid && user.photoURL}
                                alt='profile-pic'
                                className='w-14 h-14 rounded-full my-1'
                            />
                        </div>
                        {message.text ?
                            <p
                                className='mx-2 bg-blue-500 text-white h-10 max-h-24 max-w-32 rounded-l-lg rounded-b-lg p-2 cursor-pointer focus:bg-gray-500'
                                onClick={() => enableDelete(message)}
                                tabIndex={0}
                            >
                                {message.senderId === user.uid && message.text}
                            </p> :
                            <img
                                src={message.senderId === user.uid && message.img}
                                alt='shared-image'
                                className='w-24 h-24'
                            />
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Message