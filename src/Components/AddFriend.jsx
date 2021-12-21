import React, { useRef, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FriendContext } from '../contexts/FriendProvider';
import { ADD_FRIEND } from '../actions/actions';

export default function AddFriend(props) {
  const { dispatch } = useContext(FriendContext);
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" ref={nameRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" ref={ageRef} />
      </Form.Group>
      <Button
        onClick={() => {
          dispatch({
            type: ADD_FRIEND,
            payload: {
              friend: {
                name: nameRef.current.value,
                age: ageRef.current.value,
              },
            },
          });
        }}
      >
        Add Friend
      </Button>
    </Form>
  );
}
