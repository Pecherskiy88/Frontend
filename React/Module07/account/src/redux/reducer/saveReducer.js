function save (state=[], action) {
    switch(action.type) {
        case 'SAVE':
            localStorage.setItem('users', JSON.stringify([...state, action.users]))
            return [...state, action.users]
        default:
            return state
    }
}
export default save;