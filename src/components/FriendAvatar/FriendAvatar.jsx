function FriendAvatar(props) {
    const avatarStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        borderRadius: '50%',
        marginRight: '10px',
        marginLeft: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
      
    return (
        <div style = {avatarStyle}>
            {props.initials}
        </div>
    )
}

export default FriendAvatar;
