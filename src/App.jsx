import UserFriend from './components/UserFriend/UserFriend';
import './App.css';
import { useState, useEffect } from 'react';
import { getFriends } from './mocks/api';
import Loading from './components/Loading/Loading';


function App() {
  const [friendsList, setFriendsList] = useState([]);
  const [isLoadingFriends, setIsLoadingFriends] = useState(true);

  useEffect(() => {
    // se aduc datele de la server
    // fetch('http://moastapegheata/da-mi-datele').then(datele => {
    //   // baga datele in pagina
    // })
    console.log('s-a rulat efectul')

    getFriends().then(friends => {
      console.log('my friends list:')
      console.log(friends);
      setFriendsList(friends);
      setIsLoadingFriends(false);
    })
  }, []);

    return(
      <>
        <h3>My friends</h3>
        
        {isLoadingFriends && <Loading />}
        {friendsList.map((friend) => 
          <UserFriend key={friend.id} firstName={friend.firstName} lastName={friend.lastName} src={friend.avatarUrl} />
        )}
      </>
    )
  
}

export default App;