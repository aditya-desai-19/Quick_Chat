import React, { useContext, useEffect, useRef, useState } from 'react';
import UserContext from '../utils/UserContext';
import ChatContext from '../utils/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import Message from './Message';

const Messages = ({ combinedId }) => {
    const [messages, setMessages] = useState([]);
    const { user } = useContext(UserContext);
    const { contactUser } = useContext(ChatContext);

    useEffect(() => {
        let combinedId = "";
        if (contactUser.uid !== null) {
            combinedId = user.uid > contactUser.uid ? user.uid + contactUser.uid : contactUser.uid + user.uid;
        }
        const unsub = onSnapshot(doc(db, "chats", combinedId), (doc) => {
            setMessages(doc.data().messages);
        });

        return () => unsub();
    }, [combinedId]);

    return (
        <div className='h-[calc(100%-154px)] p-2 overflow-y-auto'>
            {messages.map((message) => 
                <Message key={message.id} message={message} user={user} contactUser={contactUser}/>
            )}
        </div>
    )
}

export default Messages;