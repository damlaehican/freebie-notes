import React, {useReducer} from 'react';
import reducer from './reducer';
import Context, {initialState} from './store';

const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{state, dispatch}}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
