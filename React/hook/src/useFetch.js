import {useEffect, useState} from 'react';

const useFetch = (url) => {
    const [data, setState] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(result => setState(result));
    }, [])

    return data;
}

export default useFetch;