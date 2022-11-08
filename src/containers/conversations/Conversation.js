import { useState } from 'react'
import ConversationItem from '../../components/chat/ConversationItem';

const Conversations = () => {

    const [conversation, setConversation] = useState([
        { id: 1, username: 'sajjadr73', avatar: '', gender: 'male' },
        { id: 2, username: 'sajjadddd', avatar: '', gender: 'male' },
        { id: 3, username: 'hojjjjjat70', avatar: '', gender: 'male' },
        { id: 4, username: 'mahdi-salimi', avatar: '', gender: 'male' },
        { id: 5, username: 'fereshteh', avatar: '', gender: 'famale' },
        { id: 6, username: 'sajjadr73', avatar: '', gender: 'male' },
    ]);

    return (
        <div className='flex-grow overflow-hidden overflow-y-auto no-scroll'>
            {conversation.map(item => {
                return <ConversationItem key={item?.id} item={item} />
            })}
        </div>
    )
}

export default Conversations