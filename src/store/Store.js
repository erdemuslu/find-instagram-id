import React, { createContext, useReducer } from 'react';
import { node } from 'prop-types';

// load reducers
import userReducer from '../reducers/userReducer';

// craete initial payload
const user = null;

// create context
export const MainContext = createContext(user);

// create Store
function Store({ children }) {
  const [state, dispatch] = useReducer(userReducer, user);
  const value = { state, dispatch };
  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  );
}

Store.defaultProps = {
  children: null,
};

Store.propTypes = {
  children: node,
};

export default Store;
