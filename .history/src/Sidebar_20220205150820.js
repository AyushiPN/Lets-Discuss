import React, { useEffect, useState } from 'react'
import "./Sidebar.css";
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
import db from "./firebase";
import { useStateValue } from "./StateProvider";


function Sidebar() {
const [rooms, setRooms] = useState([]);
const [{user}, dispatch] = useStateValue();

useEffect(()=> {
  const unsubscribe = db.collection("rooms").onSnapshot(
    (snapshot) => setRooms(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data:doc.data(),
      }))
    )
  )
  return() => {
    unsubscribe();
  };
}, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
              <Avatar src={user?.photoURL}/>  
              <div className="sidebar__headerRight">
                  
                  
              </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                  <SearchIcon className="searchIcon" />
                  <input placeholder="Search or start new chat" type="text" />
                </div>
                
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {rooms.map((room) => (
                  <SidebarChat key={room.id} id={room.id}
                  name={room.data.name } />
                )
                )}
            </div>
        </div>
    )
}

export default Sidebar
