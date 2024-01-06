import React from 'react';

const Message = ({ message, contactUser, user }) => {
    return (
        <div>
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
                <div className='flex items-center flex-row-reverse'>
                    <div className='flex flex-col'>
                        <img
                            src={message.senderId === user.uid && user.photoURL}
                            alt='profile-pic'
                            className='w-14 h-14 rounded-full my-1'
                        />
                    </div>

                    {message.text ?
                        <p className='mx-2 bg-blue-500 text-white h-10 max-h-24 max-w-32 rounded-l-lg rounded-b-lg p-2'>
                            {message.senderId === user.uid && message.text}
                        </p> :
                        <img
                            src={message.senderId === user.uid && message.img}
                            alt='shared-image'
                            className='w-24 h-24'
                        />
                    }
                </div>
            }
        </div>
    )
}

export default Message