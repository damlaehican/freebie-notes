import React, {createContext} from 'react';

export const initialState = {
    userInfo : {},
    currentTheme : 'light',
    themeColors : {
        light : {
            backgroundColor: '#fff',
            textColor:'#212121',
            mainColor:'#ff5227',
        },
        dark : {
            backgroundColor:'#212121',
            textColor : '#fff',
            mainColor:'#ff5227',
        },
    }
}

export default Context = createContext(initialState);