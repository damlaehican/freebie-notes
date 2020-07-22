export default function reducer(state, action) {
    switch (action.type) {
        case 'SET_THEME':
            state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
            return {...state};
        default:
            return state;
    }
}