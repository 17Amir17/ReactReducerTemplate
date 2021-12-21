import React, { useContext } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FriendContext } from '../contexts/FriendProvider';
import {
  INITIAL_STATE,
  ADD_FRIEND,
  REMOVE_FRIEND,
  UPDATE_FRIEND,
} from '../actions/actions';
export default function List(props) {
  const { state, dispatch } = useContext(FriendContext);

  return (
    <div className="list">
      <ListGroup as="ol" numbered>
        {state.map((friend) => (
          <ListGroup.Item
            key={friend.name}
            as="li"
            className="d-flex bd-highlight"
          >
            <span className="flex-grow-1 p-3">
              <b>{friend.name}</b>, {friend.age}
            </span>
            <Button
              onClick={() => {
                dispatch({ type: REMOVE_FRIEND, payload: { friend } });
              }}
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
