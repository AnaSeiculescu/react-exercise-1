
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

    const avatarImgStyle = {
        height: '50px',
        width: '50px',
        borderRadius: '50%',
    }
      
    return (
        <div style = {avatarStyle}>

            { props.avatarImageUrl === null ? props.initials : <img  style={avatarImgStyle} src={props.avatarImageUrl} /> }
 
        </div>
    )
}

export default FriendAvatar;

