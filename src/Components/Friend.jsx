import React, { useContext } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FriendContext } from '../contexts/FriendProvider';
import { REMOVE_FRIEND, UPDATE_FRIEND } from '../actions/actions';

export default function Friend(props) {
  const { dispatch } = useContext(FriendContext);
  return (
    <ListGroup.Item as="li" className="d-flex bd-highlight">
      <span className="flex-grow-1 p-3">
        <b>{props.friend.name}</b>, {props.friend.age}
      </span>
      <Button
        onClick={() => {
          dispatch({ type: REMOVE_FRIEND, payload: { friend: props.friend } });
        }}
      >
        Remove
      </Button>
      <Button
        onClick={() => {
          // Too lazy to add edit form
          dispatch({
            type: UPDATE_FRIEND,
            payload: {
              friend: props.friend,
              updated: {
                name: props.friend.name,
                age: Math.floor(Math.random() * 100),
              },
            },
          });
        }}
      >
        Update
      </Button>
    </ListGroup.Item>
  );
}
