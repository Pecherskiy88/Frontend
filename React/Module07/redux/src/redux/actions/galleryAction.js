import axios from "axios";

const newData = (data) => ({
    type: 'DOWNLOADED',
    data,
})

const END_POINT = 'https://pixabay.com/api/?key=';
const API_KEY = '5018958-ed49ccd90878e6614abdf24a6';

function getItem () {
    return axios.get(`${END_POINT}${API_KEY}&category=food&order=popular&per_page=10`);
}

export const asyncGallery = () => dispatch => {
    getItem()
        .then(data => dispatch(newData(data.data.hits)))
}