function inputValue (key=0, action) {
    switch(action.type){
        case 'ONCHANGE':
            return Number(action.inputValue)
        default:
            return key
    }
}
export default inputValue;