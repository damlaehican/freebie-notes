import React, {createContext} from 'react';

export const initialState = {
    userInfo : {},
    isDarkTheme : false,
}

export default Context = createContext(initialState);