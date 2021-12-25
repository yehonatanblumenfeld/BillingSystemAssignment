export const elementReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ELEMENT':         
             state = action.element
             break;
        case 'GET_ELEMENT':         
            return state
        default:
            return state
    }
}