function edit (state=false, action){
    switch(action.type){
        case 'EDIT':
            return true
        case 'EDITFALSE':
            return false
        default:
            return state
    }
}
export default edit;