function inputs (state={
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    birth: '',
}, action) {
    switch (action.type) {
        case `${action.type}`:
            return {...state, [action.type]: action.inputText}
        default:
            return state
    }

}
export default inputs;