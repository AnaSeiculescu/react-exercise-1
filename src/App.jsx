import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import mockFriends from './mock-friends';
import FriendAvatar from './components/FriendAvatar/FriendAvatar';

function UserFriend(props) {
  const containerStyle = {
    width: "250px",
    height: "67px",
    border: "2px solid black",
    borderRadius: "12px",
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px'
  }
  
  const nameStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: '1'
  }
  let displayName = props.firstName + ' ' + props.lastName;
  let initials = props.firstName.charAt(0) + props.lastName.charAt(0);
  return (
    <div 
        style = {containerStyle}
    >
      <FriendAvatar initials={initials} />
      <span style = {nameStyle} >{displayName}</span>
    </div>
  );
}

function App() {

  return(
    <>
    {mockFriends.map((friend) => 
      <UserFriend key={friend.id} firstName={friend.firstName} lastName={friend.lastName} />
    )}
    </>
  )
  
}


export default App;


