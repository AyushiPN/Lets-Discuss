import React, { useEffect, useState } from 'react'
import "./Chat.css"
import Avatar from '@mui/material/Avatar';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
// import { useParams } from 'react-router-dom';
// import db from "./firebase";
import { useStateValue } from './StateProvider';
// // import firebase from "firebase";

function Chat() {
const [seed, setSeed] = useState("");
const [input, setInput] = useState("");
// const {roomId} = useParams();
const [roomName, setRoomName] = useState(" ");
const [messages, setMessages] = useState([]);
const [{user}, dispatch] = useStateValue();

// useEffect(()=> {
//     if(roomId){
//         db.collection("Rooms").doc(roomId).onSnapshot((snapshot) => setRoomName(snapshot.data().name))
    
//         db.collection("Rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc").onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data()))
//         )
    
//     }


// }, [roomId]);

// useEffect(() => {
//     setSeed(Math.floor(Math.random() * 5000));
// },[]);

//     function sendMessage(e){
//         e.preventDefault();
//         console.log("you typed", input);

//         db.collection('Rooms').doc(roomId).collection('messages').add({
//             message : input,
//             name : user.displayName,
//             timestamp : firebase.firestore.FieldValue.serverTimestamp()
//         })

//         setInput(" ");
//     }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${Math.floor(Math.random() * 5000)}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen {" "}
                    {
                        new Date(
                            messages[messages.length -1]?.timestamp?.toDate()
                        ).toUTCString()
                    }
                    </p>
                </div>
                <div className="chat__headerRight">
                   
                </div>
            </div>
            <div className="chat__body">
                {/* {messages.map((message) => (
                     <p className={`chat__message ${message.name === user.displayName && 'chat__reciever'} `}>
                        <span className="chat__name">
                             {message.name}
                             {console.log(message.name)}
                         </span>
                        {message.message}
                        {console.log(message.message)}
                        <span className="chat__timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>

                    </p>
                ))} */}
                                                        
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon  />
                <form>
                    <input 
                        type="text" 
                        placeholder="Type a message"
                        value={input}
                        onChange={e => {setInput(e.target.value)}}
                    />
                    <button type="submit" >send a message</button>
                    {/* <button type="submit" onClick={sendMessage}>send a message</button> */}
                </form>
               
            </div>
        </div>
    )
}

export default Chat
