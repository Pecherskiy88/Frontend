function save (state=[], action) {
    switch(action.type) {
        case 'SAVE':
            localStorage.setItem('users', JSON.stringify([...state, action.users]))
            return action.editFlag ? state.map(el=> el.id === action.replaceObj.id ? action.replaceObj : el) : [...state, {...action.replaceObj, id: Date.now()}]
        case 'LOADED':
            const localObj = JSON.parse(localStorage.getItem('users'))
            return localObj ? [...state, ...localObj] : [...state]
        
        default:
            return state
    }
}
export default save;