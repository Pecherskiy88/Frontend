function modal (state=false, action) {
    switch (action.type) {
        case 'CLICK':
            return !state
        default:
            return state
    }
}
export default modal;