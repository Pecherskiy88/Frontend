import axios from 'axios';


function getFetch() {
    return axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
}

const fetchFromApi = (data) => ({
    type: 'DOWNLOADED',
    data,
})


export const asyncData = () => dispatch => {
    getFetch()
    .then(res => dispatch(fetchFromApi(res.data)))
}