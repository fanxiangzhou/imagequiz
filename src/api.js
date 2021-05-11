
let apiHost = "https://imagequizserverside1.herokuapp.com";
let getPlaces =() =>{

    return fetch(apiHost +'/places')
    .then(response => response.jason());
}
let add =(a,b) =>{

    return fetch(apiHost +`/add/${a}/${b}`)
    .then(response => response.jason());
}

let addPlace = (place) => {
    return fetch(apiHost + '/place',{
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(place)

    });
}
let api = {
    getPlaces: getPlaces,
    addPlace: addPlace
};

export default api;