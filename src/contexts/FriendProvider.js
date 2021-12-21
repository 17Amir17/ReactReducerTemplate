import React, { createContext, useReducer, useState } from 'react';
import friendReducer from '../reducers/friendReducer';
import initialState from '../db/drillDB';

//Create my context
const FriendContext = createContext();

//Create context provider
export default function FriendProvider(props) {
  const [state, dispatch] = useReducer(friendReducer, [...initialState]);
  return (
    <FriendContext.Provider value={{ state, dispatch }}>
      {props.children}
    </FriendContext.Provider>
  );
}

export { FriendContext };
