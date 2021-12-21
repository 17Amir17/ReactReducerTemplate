import React from 'react';
import List from './Components/List';
import FriendProvider from './contexts/FriendProvider';

function App() {
  return (
    <FriendProvider>
      <List />
    </FriendProvider>
  );
}

export default App;
