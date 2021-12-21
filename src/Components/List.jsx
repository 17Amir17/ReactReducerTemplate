import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { FriendContext } from '../contexts/FriendProvider';
import Friend from './Friend';

export default function List(props) {
  const { state } = useContext(FriendContext);

  return (
    <div className="list">
      <ListGroup as="ol" numbered>
        {state.map((friend) => (
          <Friend key={friend.name} friend={friend} />
        ))}
      </ListGroup>
    </div>
  );
}
