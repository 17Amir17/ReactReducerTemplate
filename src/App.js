import React from 'react';
import List from './Components/List';
import AddFriend from './Components/AddFriend';
import FriendProvider from './contexts/FriendProvider';

function App() {
  return (
    <div className="App">
      <FriendProvider>
        <AddFriend />
        <List />
      </FriendProvider>
    </div>
  );
}

export default App;
