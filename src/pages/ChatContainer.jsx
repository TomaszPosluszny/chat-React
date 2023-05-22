import ChatComponent from "../components/chatComponent"
import { useSelector, useDispatch } from 'react-redux';

export default function ChatContainer(){
    const username = useSelector((state) => state.username);

    return<section>
        <h1>Chat</h1>
        <h3>{username}</h3>
        <ChatComponent username ={username}/>
    </section>
    
}