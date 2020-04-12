const reducer = (state = {color: "white"}, action) => {
    switch (action.type) {
        case 'SET_YELLOW':
            return {color:"yellow"};
        case 'SET_RED':
            return {color:"red"};
        case 'SET_BLACK':
            return {color:"red"};
        default:
            return state;
    }
};

export default reducer;

