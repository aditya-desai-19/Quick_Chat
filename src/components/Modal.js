import React from 'react'
import { db } from '../firebase';
import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const Modal = ({ handleCloseModal, msg, combinedId }) => {

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const chatsRef = doc(db, "chats", combinedId);
            await updateDoc(chatsRef, {
                messages: arrayRemove({
                    id: msg.id,
                    senderId: msg.senderId,
                    text: msg.text,
                    date: msg.date
                })
            })
            toast.success("Successfully deleted message", {autoClose: 3000});
            handleCloseModal();
        } catch (error) {
            console.log(error);
            toast.error("Some error occured", {autoClose: 3000})
        }
    };

    return (
        <div className='fixed flex justify-center items-center z-10 inset-0 overflow-y-auto min-h-screen rounded-lg shadow-lg'>
            <div className='border-2 border-gray-300 p-4 text-center shadow-xl bg-white'>
                <h2 className='text-2xl font-bold text-gray-800'>Are you sure you want to delete message?</h2>
                <form className='flex flex-col justify-center items-center' onSubmit={handleDelete}>
                    <input type="text" placeholder='Message' className='border-2 border-gray-300 m-2 w-64 p-2 rounded-md focus:outline-blue-500' value={msg.text} disabled />
                    <div>
                        <button type="submit" className='bg-red-500 rounded-lg text-white p-2 m-4'>Delete</button>
                        <button type="submit" className='bg-blue-500 rounded-lg text-white p-2 m-4' onClick={handleCloseModal}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal