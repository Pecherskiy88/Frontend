function inputs (state={
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    birth: '',
    id: '',
}, action) {
    switch (action.type) {
        case `${action.name}`:
            return {...state, [action.type]: action.inputText}
            case 'EDITCHANGE':
            return action.obj
        default:
            return state
    }

}
export default inputs;