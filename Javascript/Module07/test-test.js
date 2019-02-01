'use strict'
//============геолокация==================
const onSuccess = position => {
    const {latitude, longitude} = position.coords;
    console.log(`Широта ${latitude}, долгота ${longitude}`);
    
};

const onError = error =>
console.log('Ошибка при определении геолокации:', error );

navigator.geolocation.getCurrentPosition(onSuccess, onError);
//============геолокация==================


