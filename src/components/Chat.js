import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEllipsisVertical, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import Messages from './Messages';
import UserContext from '../utils/UserContext';
import ChatContext from '../utils/ChatContext';
import MessageContext from '../utils/MessageContext';
import { Timestamp, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { toast } from 'react-toastify';
import Modal from './Modal';
import ScreenContext from '../utils/ScreenContext';

const Chat = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);
    const [combinedId, setCombinedId] = useState("");
    const [isDelete, setIsDelete] = useState(false);
    const [threeDotMenu, setThreeDotMenu] = useState(false);
    const [msg, setMsg] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const { user } = useContext(UserContext);
    const { contactUser } = useContext(ChatContext);
    const { showChat, handleChat } = useContext(ScreenContext);

    useEffect(() => {
        const combinedId = user.uid > contactUser.uid ? user.uid + contactUser.uid : contactUser.uid + user.uid;
        setCombinedId(combinedId);
    }, [user, contactUser]);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSend = async () => {
        if (text !== "") {
            const chatsRef = doc(db, "chats", combinedId);
            await updateDoc(chatsRef, {
                messages: arrayUnion({
                    id: uuid(),
                    senderId: user.uid,
                    text,
                    date: Timestamp.now()
                })
            });
            setText("");
        } else if (img !== null) {
            try {
                //uploading image and updating name
                const storageRef = ref(storage, img.name);
                const uploadTask = uploadBytesResumable(storageRef, img);
                uploadTask.on(
                    (error) => {
                        toast.error("Some error occurred while uploading image", { autoClose: 3000 });
                    },
                    () => {
                        // Handle successful uploads on complete
                        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                            const chatsRef = doc(db, "chats", combinedId);
                            await updateDoc(chatsRef, {
                                messages: arrayUnion({
                                    id: uuid(),
                                    senderId: user.uid,
                                    img: downloadURL,
                                    date: Timestamp.now()
                                })
                            });
                        });
                    }
                );
            } catch (error) {
                toast.error("Some error occurred while uploading image", { autoClose: 3000 });
            }
        } else {
            toast.error("Enter valid text or image", { autoClose: 3000 });
        }
    }

    const handleImg = (e) => {
        setImg(e.target.files[0]);
    }

    const enableDelete = (msg) => {
        setIsDelete(true);
        setMsg(msg);
    }

    const openThreeDotMenu = () => {
        setThreeDotMenu(true);
    }

    const handleDeleteModal = () => {
        setOpenModal(true);
        setThreeDotMenu(false);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const handleBack = () => {
        handleChat();
    } 

    return (
        <MessageContext.Provider value={{enableDelete}}>
            <div className={`flex-1 w-1/2 border-l-2 border-gray-300 ${showChat ? 'max-md:w-full' : 'max-md:hidden'}`}>
                <div className='flex justify-between bg-blue-500 h-20 p-4 text-white items-center'>
                    <div className='flex'>
                        <button type='button' className='mr-2 text-lg md:hidden' onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft} /></button>
                        <div className='flex items-center'>
                            <img
                                src={contactUser ? contactUser.photoURL : ''}
                                alt="user-pic"
                                className='w-12 h-12 rounded-full'
                            />
                            <span className='font-bold text-lg mx-2'>{contactUser ? contactUser.displayName : ''}</span>
                        </div>
                    </div>
                    {isDelete && <button className='text-xl cursor-pointer' onClick={openThreeDotMenu}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>}
                    {threeDotMenu && <div className='absolute right-72 min-w-32 z-10 bg-white text-black rounded-lg text-center'>
                        <p className='hover:bg-gray-400 cursor-pointer my-2'onClick={handleDeleteModal}>Delete Message</p>
                    </div>}
                </div>
                <Messages combinedId={combinedId} />
                <div className='flex p-2'>
                    <input
                        type="text"
                        placeholder="Type something..."
                        className='p-2 my-2 w-full placeholder:text-gray-600 focus:outline-blue-500 rounded-lg  text-gray-800 text-lg'
                        onChange={handleChange}
                        value={text}
                    />
                    <div className='flex justify-center'>
                        <input type="file" className='m-2 hidden' id='file' onChange={handleImg} />
                        <label htmlFor='file' className='hover:text-blue-500 text-2xl p-2 cursor-pointer mt-2'>
                            <FontAwesomeIcon icon={faPaperclip} />
                        </label>
                        <button className='hover:text-blue-500 text-2xl p-2' onClick={handleSend}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
                {openModal && <Modal handleCloseModal={handleCloseModal} msg={msg} combinedId={combinedId}/>}
            </div>
        </MessageContext.Provider>
    )
}

export default Chat