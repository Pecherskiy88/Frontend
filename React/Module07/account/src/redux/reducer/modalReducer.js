function modal (state=false, action) {
    switch (action.type) {
        case 'CLICK':
            return !state
        case 'EDIT':
            return !state
        default:
            return state
    }
}
export default modal;