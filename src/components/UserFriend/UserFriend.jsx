import FriendAvatar from '../FriendAvatar/FriendAvatar';

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
    let avatar = props.src;
    return (
      <div 
        style = {containerStyle}
      >
        <FriendAvatar initials={initials} avatarImageUrl={avatar} />
        <span style = {nameStyle} >{displayName}</span>
      </div>
    );
  }

  export default UserFriend;

