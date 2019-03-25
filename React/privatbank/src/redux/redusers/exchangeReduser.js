    function exchangeResult (key=0, action) {
    switch(action.type){
        case 'CHANGE':
            return action.arr.find(el => el.ccy === action.data).buy * action.value;
         
        default:
            return key;
    }
}
export default exchangeResult;