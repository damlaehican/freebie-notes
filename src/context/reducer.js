import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export default function reducer(state, action) {
    switch (action.type) {
        case 'SET_THEME':
            state.isDarkTheme = !state.isDarkTheme;
            AsyncStorage.setItem('@THEME', state.isDarkTheme.toString());
            return {...state};
        default:
            return state;
    }
}