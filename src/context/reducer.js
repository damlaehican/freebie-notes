export default function reducer(state, action) {
    switch (action.type) {
        case 'SET_THEME':
            state.isDarkTheme = !state.isDarkTheme;
            return {...state};
        default:s
            return state;
    }
}